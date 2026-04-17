from django.urls import path
from . import views 

urlpatterns = [
    path('',views.index, name='index'),
    path('contact/',views.contact, name='contact'),
    path('signup/',views.signup, name='signup'),
    path('login/',views.login, name='login'),
    path('logout/',views.logout, name='logout'),
    path('change-password/',views.change_password, name='change_password'),
    path('profile/',views.profile, name='profile'),
    path('forgot-Password/',views.forgot_Password, name='forgot-Password'),
    path('verify-otp/',views.verify_otp, name='verify-otp'),
    path('new_password/',views.new_password, name='new_password'),
]