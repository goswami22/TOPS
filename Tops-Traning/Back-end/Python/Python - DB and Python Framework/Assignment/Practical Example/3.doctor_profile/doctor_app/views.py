
from django.shortcuts import render

def doctor_profile(request):
    return render(request, 'doctor.html')