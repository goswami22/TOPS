from django.urls import path
from . import views

urlpatterns = [
    path('', views.doctor_profile, name='doctor_profile'),
]