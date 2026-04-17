from django.shortcuts import render, redirect,get_object_or_404
from .models import Doctor
from .form import DoctorForm

# List + Search
def doctor_list(request):
    query = request.GET.get('q')
    if query:
        doctors = Doctor.objects.filter(specialization__icontains=query)
    else:
        doctors = Doctor.objects.all()
    return render(request, 'doctor_list.html', {'doctors': doctors})

# Add Doctor
def add_doctor(request):
    form = DoctorForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('doctor_list')
    return render(request, 'doctor_form.html', {'form': form})


def edit_doctor(request, id):
    doctor = get_object_or_404(Doctor, id=id)
    form = DoctorForm(request.POST or None, instance=doctor)
    if form.is_valid():
        form.save()
        return redirect('doctor_list')
    return render(request, 'doctor_form.html', {'form': form})

# Delete Doctor
def delete_doctor(request, id):
    doctor = get_object_or_404(Doctor, id=id)
    doctor.delete()
    return redirect('doctor_list')
