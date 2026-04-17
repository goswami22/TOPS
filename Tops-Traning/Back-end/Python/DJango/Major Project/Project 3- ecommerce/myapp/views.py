from django.shortcuts import render
from . models import Contact, User
from django.core.mail import send_mail
from django.conf import settings
import random 


# Create your views here.
def index(request):
    return render(request, 'index.html')

def contact(request):
    if request.method == "POST":
        Contact.objects.create(
            name=request.POST['name'],
            email=request.POST['email'],
            subject=request.POST['subject'],
            message=request.POST['message'],
        )
        msg='Contact Saved Successfully'
        return render(request, 'contact.html',{'msg':msg})
    else:    
        return render(request, 'contact.html')

def signup(request):
    if request.method == 'POST':
        try:
            User.objects.get(email=request.POST['email'])
            msg='Email Already Registered'
            return render(request, 'signup.html', {'msg':msg})
        except:
            if request.POST['password']==request.POST['c_password']:
                User.objects.create(
                    fname=request.POST['fname'],
                    lname=request.POST['lname'],
                    email=request.POST['email'],
                    mobile=request.POST['mobile'],
                    password=request.POST['password'],
                )
                msg="User Signup Successfully"
                return render(request, 'signup.html', {'msg':msg})
            else:
                msg="password and Confirm password Dosen't match"
                return render(request, 'signup.html', {'msg':msg})
    else:
        return render(request, 'signup.html')
    

def login(request):
    if request.method == 'POST':
        try:
            user= User.objects.get(email=request.POST['email'])
            if user.password == request.POST['password']:
                request.session['email']=user.email
                request.session['fname']=user.fname
                return render(request, 'index.html')
            else:
                msg="Invalid Password"
                return render(request, 'login.html', {'msg':msg})         
        except:
            msg="Invalid Email"
            return render(request, 'login.html', {'msg':msg})
    else:
        return render(request, 'login.html')

def logout(request):
    try:
        del request.session['email']
        del request.session['fname']
        msg= "User Logout Successfully"
        return render(request, 'login.html',{'msg':msg})
    except:
        msg= "User Logout Successfully"
        return render(request, 'login.html',{'msg':msg})
    

def buyer_account(request):
    return render(request, 'my-account.html')

def change_password(request):
    if request.method == 'POST':
        user=User.objects.get(email=request.session['email'])
        if user.password==request.POST['old_password']:
            if request.POST['new_password']==request.POST['c_password']:
                if user.password!=request.POST['new_password']:
                    user.password=request.POST['new_password']
                    user.save()
                    del request.session['email']
                    del request.session['fname']
                    msg='Your password successfully change, please login again'
                    return render(request, 'login.html',{'msg':msg})

                else:
                    msg="Your new password can't your old password"
                    return render(request, 'my-account.html',{'msg':msg})
            else:
                msg="Your new password and confirm password doesn't match"
                return render(request, 'my-account.html',{'msg':msg})
        else:
            msg="Your old password doen't match"
            return render(request, 'my-account.html',{'msg':msg})
    else:    
        return render(request, 'login.html')




def forgot_password(request):
    if request.method == 'POST':
        try:
            user=User.objects.get(email=request.POST['email'])
            otp=random.randint(100000, 999999)
            subject='OTP for forgot password'
            message='Your OTP for forgot password is'+str(otp)
            send_mail(subject,message,settings.EMAIL_HOST_USER,[user.email,])
            request.session['otp']=otp
            request.session['to_email']=user.email
            return render(request, 'otp.html')
        except:
            msg='Email Not Registerd'
            return render(request, 'forgot-password.html',{'msg':msg})
    
    else:
        return render(request, 'forgot-password.html')

def Verify_OTP(request):
    otp1=int(request.POST['otp'])
    otp2=int(request.session['otp'])

    if otp1==otp2:
        del request.session['otp']
        msg='Set Your New Password'
        return render(request, 'new-password.html',{'msg':msg})
    else:
        msg="Invalid OTP"
        return render(request, 'otp.html',{'msg':msg})

def new_password(request):
    if request.POST['new_password']==request.POST['confirm_password']:
        user=User.objects.get(email=request.session['to_email'])
        if user.password!=request.POST['new_password']:
            user.password=request.POST['new_password']
            user.save()

            del request.session['to_email']
            msg="Password Update Successfully"
            return render(request,'login.html',{'msg':msg})
        else:
            msg="Your new password can't Your old password"
            return render(request, 'new-password.html',{'msg':msg})
    else:
        msg="Your old password and your New password Doesn't match"
        return render(request, 'new-password.html',{'msg':msg})

def profile(request):
    user=User.objects.get(email=request.session['email'])

    if request.method=='POST':
        user.fname=request.POST['fname']
        user.lname=request.POST['lname']
        user.email=request.POST['email']
        user.mobile=request.POST['mobile']
        user.address=request.POST['address']
        try:
            user.profile_picture=request.FILES['profile_picture']
        except:
            pass
        user.save()
        request.session['profile_picture']=user.profile_picture.url
        msg="Profile Successdfully Updated"
        return render(request, 'profile.html', {'msg':msg, 'user':user})
    else:
        return render(request, 'profile.html',{'user':user})