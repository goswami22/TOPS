from django.shortcuts import render
from .models import Contact, User
from django.core.mail import send_mail
from django.conf import settings
import random

# Create your views here.

def index(request):
    return render(request, 'index.html')

def contact(request):
    if request.method=='POST':
        Contact.objects.create(
            name=request.POST['name'],
            email=request.POST['email'],
            mobile=request.POST['mobile'],
            address=request.POST['address']
        )
        msg="Contact Saved successfully"
        return render(request, 'contact.html', {'mag':msg})
    else: 
        return render(request, 'contact.html')

def signup(request):
    if request.method == 'POST':
        try:
            User.objects.get(email=request.POST['email'])
            msg = 'Email is already registered'
            return render(request, 'signup.html', {'msg': msg})

        except:
            if request.POST['password'] == request.POST['cpassword']:
                User.objects.create(
                    fname=request.POST['fname'],
                    lname=request.POST['lname'],
                    email=request.POST['email'],
                    mobile=request.POST['mobile'],
                    address=request.POST['address'],
                    password=request.POST['password'],
                )
                msg = 'Signup Successfully'
                return render(request, 'signup.html', {'msg': msg})
            else:
                msg = 'Password and Confirm password does not match'
                return render(request, 'signup.html', {'msg': msg})

    return render(request, 'signup.html')


def login(request):
    if request.method == 'POST':
        try:
            user= User.objects.get(email=request.POST['email'])
            if user.password==request.POST['password']:
                request.session['email']=user.email
                request.session['fname']=user.fname
                return render(request, 'index.html')
            else:
                msg='Incorrect Password'
                return render(request, 'login.html', {'msg':msg})
        except:
            msg='Email not registred'
            return render(request, 'login.html', {'msg':msg})
    else:
        return render(request, 'login.html')

def logout(request):
    try:
        del request.session['email']    
        del request.session['fname']  
        msg= 'User Logout successfully'
        return render(request, 'login.html', {'msg':msg})          
    except:
        msg= 'User Logout successfully'
        return render(request, 'login.html', {'msg':msg}) 
    
    
def change_password(request):
    if request.method == 'POST':
        user= User.objects.get(email=request.session['email'])
        if user.password==request.POST['old_password']:
            if request.POST['new_password']==request.POST['confirm_password']:
                if user.password!=request.POST['new_password']:
                    user.password=request.POST['new_password']
                    user.save()
                    del request.session['email']
                    del request.session['fname']
                    msg='Password change successfully, plase Login again'
                    return render(request, 'change-password.html', {'msg':msg})
                else:
                    msg= 'Your new password cannot be From old password'
                    return render(request, 'change-password.html', {'msg':msg})
            else:
                msg= 'new password and confirm password dose not match'
                return render(request, 'change-password.html', {'msg':msg})
        else:
            msg= 'old password does not macth'
            return render(request, 'change-password.html', {'msg':msg})
    else:   
        return render(request, 'change-password.html')

def profile(request):
    return render(request, 'profile.html')

def forgot_Password(request):
    if request.method == 'POST':
        try:
            user= User.objects.get(email=request.POST['email'])
            otp=random.randint(1000, 9999)
            subject= 'OTP for forgot password'
            message='you OTP for forgot password is'+str(otp)
            send_mail(subject,message,settings.EMAIL_HOST_USER,[user.email,])
            request.session['otp']=otp
            request.session['to_email']=user.email
            return render(request,'otp.html')

        except Exception as e:
            print(e)
            msg='Email not Registred'
            return render(request, 'forgot-password.html', {'msg':msg})
    else:
        return render(request, 'forgot-password.html')

def verify_otp(request):
    otp1 = int(request.POST['otp'])
    otp2 = int(request.session['otp'])
    if otp1 == otp2:
        del request.session['otp']
        msg='set your new password'
        return render(request,'new-password.html', {'msg':msg})  
    else:
        msg= 'Invalid otp'
        return render(request,'otp.html', {'msg':msg})  
    

def new_password(request):
    if request.POST['new_password']==request.POST['confirm_password']:
        user=User.objects.get(email=request.session['to_email'])
        if user.password!=request.POST['new_password']:
            user.password=request.POST['new_password']
            user.save()
            del request.session['to_email']
            msg='password update successfully'
            return render(request,'login.html', {'msg':msg})  
        else:
            msg="your new pasword can't be yout old password"
            return render(request,'new_password.html', {'msg':msg}) 
    else:
        msg="Your new password and confirm pasword does not match"
        return render(request,'new_password.html', {'msg':msg}) 


