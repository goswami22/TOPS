from django.shortcuts import render
from .models import Contact, User

# Create your views here.
def index(request):
    return render(request, 'index.html')

def contact(request):
    if request.method == 'POST':
        Contact.objects.create(
            fname=request.POST['fname'],
            lname=request.POST['lname'],
            email=request.POST['email'],
            mobile=request.POST['mobile'],
            address=request.POST['address']
        )
        msg= 'Contact saved successfully'
        contacts=Contact.objects.all().order_by('-id')[:3]
        return render(request, 'contact.html', {'msg':msg, 'contacts':contacts}
        )
    else:   
        contacts=Contact.objects.all().order_by('-id')[:3]
        return render(request, 'contact.html', {'contacts':contacts})

def signup(request):
    if request.method == 'POST':
        try:
            User.objects.get(email=request.POST['email'])
            msg='email is all ready regiseted'
            return render(request, 'signup.html', {'msg':msg})
        except:
            if request.POST['password']==request.POST['cpassword']:
                User.objects.create(
                    fname=request.POST['fname'],
                    lname=request.POST['lname'],
                    email=request.POST['email'],
                    mobile=request.POST['mobile'],
                    address=request.POST['address'],
                    password=request.POST['password'],
                )
                msg='Signup Successfully'
                return render(request, 'signup.html', {'msg':msg})
            else:
                msg='Password and Confirm password does not match'
                return render(request, 'signup.html', {'msg':msg})
    else:   
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
                msg= 'incorect password'    
                return render(request, 'login.html', {'mag':msg})
        except:
            msg='Email not registerd'   
            return render(request, 'login.html', {'mag':msg})
    else:
        return render(request, 'login.html')

def logout(request):
    try:
        del request.session['email']
        del request.session['fname']
        msg='Logout successfull'
        return render(request, 'login.html', {'msg':msg})
    except:    
        msg='ogout successfull'
        return render(request, 'login.html', {'msg':msg})
    
def change_password(request):
    if request.method == 'POST':
        user= User.objects.get(email=request.session['email'])
        if user.password==request.POST['oldpassword']:
            if request.POST['newpassword']==request.POST['cnpassword']:
                if user.password!=request.POST['newpassword']:
                    user.password=request.POST['newpassword']
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
    user= User.objects.get(email=request.session['email'])
    if request.method=='POST':
        user.fname=request.POST['fname']
        user.lname=request.POST['lname']
        user.mobile=request.POST['mobile']
        user.address = request.POST['address']
        user.save()
        msg="Profile Updated successfully"
        return render(request, 'profile.html', {'user':user, 'msg':msg})
    else:
        return render(request, 'profile.html', {'user':user})
