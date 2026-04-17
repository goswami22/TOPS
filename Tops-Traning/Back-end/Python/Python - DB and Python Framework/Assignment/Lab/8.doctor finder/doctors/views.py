from django.shortcuts import render, get_object_or_404, redirect
from django.db.models import Q
from django.contrib import messages
from .models import Doctor, Specialty, Appointment
from django.conf import settings


def home(request):
    specialties = Specialty.objects.all()
    featured_doctors = Doctor.objects.filter(is_verified=True)[:6]
    total_doctors = Doctor.objects.count()
    total_specialties = Specialty.objects.count()
    context = {
        'specialties': specialties,
        'featured_doctors': featured_doctors,
        'total_doctors': total_doctors,
        'total_specialties': total_specialties,
    }
    return render(request, 'doctors/home.html', context)


def doctor_list(request):
    doctors = Doctor.objects.filter(is_verified=True)
    specialties = Specialty.objects.all()

    # Search and filters
    query = request.GET.get('q', '')
    specialty_id = request.GET.get('specialty', '')
    city = request.GET.get('city', '')
    availability = request.GET.get('availability', '')

    if query:
        doctors = doctors.filter(
            Q(name__icontains=query) |
            Q(hospital__icontains=query) |
            Q(specialty__name__icontains=query)
        )
    if specialty_id:
        doctors = doctors.filter(specialty__id=specialty_id)
    if city:
        doctors = doctors.filter(city__icontains=city)
    if availability:
        doctors = doctors.filter(availability=availability)

    cities = Doctor.objects.values_list('city', flat=True).distinct()

    # Map data
    map_doctors = [
        d for d in doctors if d.latitude and d.longitude
    ]

    context = {
        'doctors': doctors,
        'specialties': specialties,
        'cities': cities,
        'query': query,
        'selected_specialty': specialty_id,
        'selected_city': city,
        'selected_availability': availability,
        'map_doctors': map_doctors,
        'GOOGLE_MAPS_API_KEY': settings.GOOGLE_MAPS_API_KEY,
    }
    return render(request, 'doctors/doctor_list.html', context)


def doctor_detail(request, pk):
    doctor = get_object_or_404(Doctor, pk=pk)
    related_doctors = Doctor.objects.filter(
        specialty=doctor.specialty, is_verified=True
    ).exclude(pk=pk)[:3]
    context = {
        'doctor': doctor,
        'related_doctors': related_doctors,
        'GOOGLE_MAPS_API_KEY': settings.GOOGLE_MAPS_API_KEY,
    }
    return render(request, 'doctors/doctor_detail.html', context)


def book_appointment(request, pk):
    doctor = get_object_or_404(Doctor, pk=pk)
    if request.method == 'POST':
        appointment = Appointment.objects.create(
            doctor=doctor,
            patient_name=request.POST.get('patient_name'),
            patient_email=request.POST.get('patient_email'),
            patient_phone=request.POST.get('patient_phone'),
            appointment_date=request.POST.get('appointment_date'),
            appointment_time=request.POST.get('appointment_time'),
            reason=request.POST.get('reason'),
        )
        messages.success(request, f'Appointment booked with Dr. {doctor.name}! We will confirm shortly.')
        return redirect('appointment_success', pk=appointment.pk)
    return render(request, 'doctors/book_appointment.html', {'doctor': doctor})


def appointment_success(request, pk):
    appointment = get_object_or_404(Appointment, pk=pk)
    return render(request, 'doctors/appointment_success.html', {'appointment': appointment})


def map_view(request):
    doctors = Doctor.objects.filter(is_verified=True, latitude__isnull=False, longitude__isnull=False)
    context = {
        'doctors': doctors,
        'GOOGLE_MAPS_API_KEY': settings.GOOGLE_MAPS_API_KEY,
    }
    return render(request, 'doctors/map_view.html', context)
