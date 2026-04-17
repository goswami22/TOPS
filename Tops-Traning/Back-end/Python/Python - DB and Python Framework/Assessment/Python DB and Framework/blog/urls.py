from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('', views.home, name='home'),
    path('register/', views.register_view, name='register'),
    path('login/', views.CustomLoginView.as_view(), name='login'),
    path('logout/', views.logout_view, name='logout'),
    
    path('post/new/', views.post_create, name='post_create'),
    path('post/<slug:slug>/', views.post_detail, name='post_detail'),
    path('post/<slug:slug>/edit/', views.post_update, name='post_update'),
    path('post/<slug:slug>/delete/', views.post_delete, name='post_delete'),
    
    path('post/<int:post_id>/like/', views.toggle_like, name='toggle_like'),
    path('profile/<str:username>/', views.profile, name='profile'),
    path('profile/<str:username>/edit/', views.profile_update, name='profile_update'),
    path('profile/<str:username>/follow/', views.toggle_follow, name='toggle_follow'),
]
