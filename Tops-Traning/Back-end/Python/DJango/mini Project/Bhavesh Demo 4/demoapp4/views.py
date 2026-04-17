from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def contact(request):
    return render(request, 'contact.html')

def portfolio(request):
    return render(request, 'portfolio.html')

def project(request):
    return render(request, 'project.html')


def login(request):
    return render(request, 'login.html')

def signup(request):
    return render(request, 'signup.html')
