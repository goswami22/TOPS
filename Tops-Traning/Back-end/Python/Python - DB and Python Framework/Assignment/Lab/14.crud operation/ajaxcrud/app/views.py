
# Create your views here.
from django.shortcuts import render, get_object_or_404
from .models import Student
from .form import StudentForm
from django.http import JsonResponse
from django.shortcuts import redirect
from django.http import HttpResponse

def index(request):
    students = Student.objects.all()
    form = StudentForm()
    return render(request, 'index.html', {'students': students, 'form': form})


# CREATE
def create_student(request):
    if request.method == "POST":
        form = StudentForm(request.POST)
        if form.is_valid():
            student = form.save()
            data = {
                'id': student.id,
                'name': student.name,
                'email': student.email,
                'phone': student.phone
            }
            return JsonResponse(data)
    return JsonResponse({'error': 'Invalid data'})


# UPDATE
def update_student(request, id):
    student = get_object_or_404(Student, id=id)
    if request.method == "POST":
        form = StudentForm(request.POST, instance=student)
        if form.is_valid():
            student = form.save()
            data = {
                'id': student.id,
                'name': student.name,
                'email': student.email,
                'phone': student.phone
            }
            return JsonResponse(data)
    return JsonResponse({'error': 'Invalid data'})


# DELETE
def delete_student(request, id):
    student = get_object_or_404(Student, id=id)
    student.delete()
    return JsonResponse({'success': True})

def home(request):
    return redirect('/app/')


def home(request):
    return HttpResponse("Home Page Working")
