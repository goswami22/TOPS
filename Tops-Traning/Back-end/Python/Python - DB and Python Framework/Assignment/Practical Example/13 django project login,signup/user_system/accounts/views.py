from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from .models import Profile
from django.contrib.auth.decorators import login_required

# Signup
def signup(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

        User.objects.create_user(username=username, email=email, password=password)
        return redirect('login')

    return render(request, 'signup.html')

# Login
def user_login(request):
    if request.method == 'POST':
        user = authenticate(
            request,
            username=request.POST['username'],
            password=request.POST['password']
        )
        if user:
            login(request, user)
            return redirect('dashboard')
        else:
            return render(request, 'login.html', {'error': 'Invalid Credentials'})

    return render(request, 'login.html')

# Dashboard
@login_required
def dashboard(request):
    return render(request, 'dashboard.html')

# Profile Update
@login_required
def profile(request):
    profile = request.user.profile

    if request.method == 'POST':
        profile.phone = request.POST['phone']
        profile.address = request.POST['address']
        profile.save()
        return redirect('dashboard')

    return render(request, 'profile.html', {'profile': profile})

# Logout
def user_logout(request):
    logout(request)
    return redirect('login')