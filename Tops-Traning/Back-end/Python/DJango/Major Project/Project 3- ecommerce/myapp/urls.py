from django.urls import path
from .import views

urlpatterns = [
    path('',views.index, name='index'),
    path('contact/',views.contact, name='contact'),
    path('signup/',views.signup,name='signup'),
    path('login/',views.login,name='login'),
    path('logout/',views.logout,name='logout'),
    path('buyer-account/',views.buyer_account,name='buyer-account'),
    path('change-password/',views.change_password,name='change-password'),
    path('profile/',views.profile,name='profile'),
    path('forgot-password/',views.forgot_password,name='forgot-password'),
    path('Verify-OTP/',views.Verify_OTP,name='Verify-OTP'),
    path('new-password/',views.new_password,name='new-password'),

]
