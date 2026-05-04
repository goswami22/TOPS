from django.shortcuts import render
from . models import Contact, User

# Create your views here.

def index(request):
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
                    password=request.POST['password']
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
                return render(request, 'index.html')
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
        return render(request, 'profile.html', {'msg': msg, 'user': user})
    else:
        return render(request, 'profile.html', {'user': user})
