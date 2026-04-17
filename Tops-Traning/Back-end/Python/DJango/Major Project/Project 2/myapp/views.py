from django.shortcuts import render
from . models import Contact

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

def login(request):
    return render(request, 'login.html')

def signup(request):
    if request.method == "POST":
    
    else:
        return render(request, 'signup.html')

def about(request):
    return render(request, 'about.html')

def all_collation(request):
    return render(request, 'all-collation.html')

def blog(request):
    return render(request, 'blog.html')

def collation(request):
    return render(request, 'collation.html')

def product_detail(request):
    return render(request, 'product-detail.html')
