
from django.urls import path
from . import views


urlpatterns = [
    path('',views.index, name="index"),
    path('signup/',views.signup, name="signup"),
    path('about/',views.about, name="about"),
    path('login/',views.login, name="login"),
    path('logout/',views.logout, name="logout"),
    path('dashboard/',views.dashboard, name="dashboard"),
    path('doctor-dashboard/',views.doctor_dashboard, name="doctor-dashboard"),
    path('doctors/',views.doctors, name="doctors"),
    path('departments/',views.departments, name="departments"),
    path('patient-dashboard/',views.patient_dashboard, name="patient-dashboard"),
    path('contact/',views.contact, name="contact"),
    path('forgot-password/',views.forgot_password, name="forgot-password"),
    path('verify-otp/',views.verify_otp, name="verify-otp"),
    path('new-password/',views.new_password, name="new-password"),
    path('blog/',views.blog, name="blog"),
]