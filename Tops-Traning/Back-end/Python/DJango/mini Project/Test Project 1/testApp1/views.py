from django.shortcuts import render
from .models import Contact, User

# Create your views here.
def index(request):
    return render(request, 'index.html')

def portfolio(request):
    return render(request, 'portfolio.html')

def contact(request):
    if request.method=='POST':
        Contact.objects.create(
            name=request.POST['name'],
            email=request.POST['email'],
            mobile=request.POST['mobile'],
            message=request.POST['message']
        )
        msg = 'data save successfull'
        contacts=Contact.objects.all().order_by('-id')[:3]
        return render(request, 'contact.html',{'msg':msg, 'contacts':contacts})
    else:
        contacts=Contact.objects.all().order_by('-id')[:3]
        return render(request, 'contact.html',{'contacts':contact})

def about(request):
    return render(request, 'about.html')

def signup(request):
    if request.method == 'POST':
        try:
            User.objects.get(email=request.POST['email'])
            msg='Email already registed'
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
                msg= 'User signup successfully'
                return render(request, 'signup.html', {'msg':msg})
            else:
                msg= 'password & confirm pawword not match'
                return render(request, 'signup.html', {'msg':msg})
    else:
        return render(request, 'signup.html')

def login(request):
    return render(request, 'login.html')