from django.shortcuts import render
from .models import Contact, User

# Create your views here.
def index(request):
    return render(request,'index.html')


def contact(request):
    if request.method=='POST':
        Contact.objects.create(
            name=request.POST['name'],
            email=request.POST['email'],
            mobile=request.POST['mobile'],
            remark=request.POST['remark']
        )      
        msg = 'data save successfull' 
        contacts=Contact.objects.all().order_by('-id')[:3]
        return render(request, 'contact.html', {'msg':msg, 'contacts':contacts})
    else:
        contacts=Contact.objects.all().order_by('-id')[:3]
        return render(request, 'contact.html', {'contacts':contacts})

def profile(request):
    return render(request, 'profile.html')

def signup(request):
    if request.method== 'POST':
        try:
            User.objects.get(email=request.POST['email'])
            msg='email is already registered'
            return render(request, 'signup.html', {'msg':msg})
        except:
            if request.POST['password']==request.POST['cpassword']:
                User.objects.create(
                    fname=request.POST['fname'],
                    lname=request.POST['lname'],
                    email=request.POST['email'],
                    mobile=request.POST['mobile'],
                    address=request.POST['address'],
                    password=request.POST['password']
                )
                msg = 'signup successfully'
                return render(request, 'signup.html', {'msg':msg})
            else:
                msg = 'password and confim pasword not match'
                return render(request, 'signup.html', {'msg':msg})
    else:
        return render(request, 'signup.html')

def login(request):
    if request.method=='POST':
        try:
            user=User.objects.get(email=request.POST['email'])
            if user.password==request.POST['password']:
                request.session['email']=user.email
                request.session['fname']=user.fname
                return render(request,'index.html')
            else:
                msg= 'Incorect Password'
                return render(request, 'login.html', {'msg':msg})    
        except:
            msg= 'Email Not Registred'
            return render(request, 'login.html', {'msg':msg})    
    else:
        return render(request, 'login.html')
    
def logout(request):
    try:
        del request.session['email']
        del request.session['fname']
        msg='user logout succesfully'
        return render(request, 'login.html', {'msg':msg})
    except:
        msg='user logout succesfully'
        return render(request, 'login.html', {'msg':msg})

def change_password(request):
    if request.method== 'POST':
        user=User.objects.get(email=request.session['email'])
        if user.password==request.POST['old_password']:
            if request.POST['new_password']==request.POST['cnew_password']:
                if user.password!=request.POST['new_password']:
                    user.password=request.POST['new_password']
                    user.save()
                    del request.session['email']
                    del request.session['fname']
                    msg='Password change successfully, plaese login again'
                    return render(request, 'login.html', {'msg':msg})
                else:
                    msg='your new password can not be your old password'
                    return render(request, 'login.html', {'msg':msg})
            else:
                msg = 'New password and Confirm new password Dose not match'
                return render(request, 'login.html', {'msg':msg})
        else:
            msg= 'Old password does not match'
            return render(request, 'login.html', {'msg':msg})

    else:
        return render(request, 'change_password.html')


def profile(request):
    user=User.objects.get(email=request.session['email'])
    if request.method == 'POST':
        user.fname=request.POST['fname']
        user.lname=request.POST['lname']
        user.mobile =request.POST['mobile']
        user.address=request.POST['address']
        user.save()
        request.session['fname']=user.fname
        msg= 'profile update successfully'
        return render(request, 'profile.html', {'user':user, 'msg': msg })
    else:    
        return render(request, 'profile.html', {'user':user})


