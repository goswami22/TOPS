from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('contact/',views.contact, name='contact'),
    path('portfolio /', views.portfolio ,name='portfolio'),
    path('project/',views.project, name='project'),
    path('login/',views.login, name= 'login'),
    path('signup/',views.signup, name='signup')


]
