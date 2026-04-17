
from django.shortcuts import render

def form_page(request):
    return render(request, 'form.html')