from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('doctors/', views.doctor_list, name='doctor_list'),
    path('doctors/<int:pk>/', views.doctor_detail, name='doctor_detail'),
    path('doctors/<int:pk>/book/', views.book_appointment, name='book_appointment'),
    path('appointment/<int:pk>/success/', views.appointment_success, name='appointment_success'),
    path('map/', views.map_view, name='map_view'),
]
