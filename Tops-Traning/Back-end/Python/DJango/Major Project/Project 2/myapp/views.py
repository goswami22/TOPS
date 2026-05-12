from django.shortcuts import render
from . models import Contact, User
from django.core.mail import send_mail
from django.conf import settings
import random 

# Create your views here.

def index(request):
    try:
        user=User.objects.get(email=request.session['email'])
        if user.usertype== 'buyer':
            return render(request, 'index.html')
        else:
            return render(request, 'seller-index.html')
    except:    
        return render(request, 'index.html')

def contact(request):
    if request.method =="POST":
        Contact.objects.create(
            name=request.POST['name'],
            email=request.POST['email'],
            mobile=request.POST['mobile'],
            message=request.POST['message']
        )
        msg="Contact save successfully"
        return render(request, 'contact.html',{'msg':msg})
    else:
        return render(request, 'contact.html')

def signup(request):
    if request.method == 'POST':
        try:
            User.objects.get(email=request.POST['email'])
            msg='Email already registered'
            return render(request, 'login.html', {'msg':msg})
        except:
            if request.POST['password']==request.POST['c_password']:
                User.objects.create(
                    fname=request.POST['fname'],
                    lname=request.POST['lname'],
                    email=request.POST['email'],
                    phone=request.POST['phone'],
                    gender=request.POST['gender'],
                    address=request.POST['address'],
                    profile_picture=request.FILES['profile_picture'],
                    password=request.POST['password'],
                    usertype=request.POST['usertype']
                )
                msg="User signup sucessfully"
                return render(request, 'signup.html',{'msg':msg} )
            else:
                msg="Passwrod and confirm password doesn't match"
                return render(request, 'signup.html',{'msg':msg} )
    else:    
        return render(request, 'signup.html')

def login(request):
    if request.method == 'POST':
        try:
            user=User.objects.get(email=request.POST['email'])
            if user.password==request.POST['password']:
                request.session['email']=user.email
                request.session['fname']=user.fname
                request.session['profile_picture']=user.profile_picture.url
                if user.usertype == 'buyer':
                    return render(request, 'index.html')
                else:
                    return render(request, 'seller-index.html')
                    
            else:
                msg='Password incorect'
                return render(request,'login.html', {'msg':msg})
        except:
            msg="Email not registred"
            return render(request, 'login.html', {'msg':msg})                
    else:
        return render(request, 'login.html')

def logout(request):
    try:
        del request.session['email']
        del request.session['fname']
        del request.session['profile_picture']
    except:
        pass
    msg = "Logout Successfully"
    return render(request, 'login.html', {'msg':msg})
    
def profile(request):

    user = User.objects.get(email=request.session['email'])
    if request.method == 'POST':
        user.fname = request.POST['fname']
        user.lname = request.POST['lname']
        user.phone = request.POST['phone']
        user.gender = request.POST.get('gender', user.gender)
        user.address = request.POST['address']
        try:
            user.profile_picture = request.FILES['profile_picture']
        except:
            pass
        user.save()    
        request.session['profile_picture'] = user.profile_picture.url     
        msg = "Profile updated successfully"
        if user.usertype == 'buyer':
            return render(request, 'profile.html', {'user': user, 'msg':msg})
        else:
            return render(request, 'seller-profile.html', {'user': user, 'msg':msg})
    else:
        if user.usertype == 'buyer':
            return render(request, 'profile.html', {'user': user})
        else:
            return render(request, 'seller-profile.html', {'user': user})
            
    
    
def seller_add_product(request):
    return render(request, 'seller-add-product.html')

def forgot_password(request):
    if request.method == 'POST':
        try:
            user=User.objects.get(email=request.POST['email'])
            otp=random.randint(1000,9999)
            subject = 'OTP for forgot password'
            message= 'you OTP for forgot password is'+ str(otp)
            send_mail(subject,message,settings.EMAIL_HOST_USER,[user.email,])
            request.session['otp']= otp
            request.session['to_email']=user.email
            return render(request, 'otp.html')
        except:    
            msg= "Email Not Registerd"
            return render(request, 'forgot-password.html',{'msg':msg})    
    else:
        return render(request, 'forgot-password.html')    
    
    
def verify_otp(request):
    otp1 = int(request.POST['otp'])
    otp2 = int(request.session['otp'])
    if otp1 == otp2 :
        del request.session['otp']
        msg="set your new password"
        return render(request, 'new-password.html',{'msg':msg})
    else:
        msg= 'Invalid OTP'
        return render(request, 'otp.html',{'msg':msg})
    

def new_password(request):
    if request.POST['new-password']==request.POST['confirm-password']:
        user=User.objects.get(email=request.session['to_email'])
        if user.password !=request.POST['new-password']:
            user.password = request.POST['new-password']
            user.save()
            del request.session['to_email']
            msg= 'Password Update Successfully'
            return render(request,'login.html',{'msg':msg})
        else:
            msg="your new password can't be your old password"
            return render(request,'new-password.html', {'msg':msg})
    else:
        msg="Your new password and confirm password does not match"
        return render(request,'new-password.html', {'msg':msg})
    
    
    
    
