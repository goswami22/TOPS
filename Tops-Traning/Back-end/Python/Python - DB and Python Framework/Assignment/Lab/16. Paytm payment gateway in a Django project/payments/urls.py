from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('initiate_payment/', views.initiate_payment, name='initiate_payment'),
    path('callback/', views.callback, name='callback'),
]
