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
            user=User.request.get(email=request.POST['email'])
            msg='Email already registred'
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


