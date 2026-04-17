from django.shortcuts import render, redirect

# Create your views here.
from .models import Doctor
from .form import DoctorForm

def doctor_list(request):
    doctors = Doctor.objects.all()
    return render(request, 'doctor_list.html', {'doctors': doctors})

def add_doctor(request):
    if request.method == 'POST':
        form = DoctorForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('doctor_list')
    else:
        form = DoctorForm()

    return render(request, 'add_doctor.html', {'form': form})