from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name="index"),
    path('contact/',views.contact, name="contact"),
    path('login/', views.login, name='login'),
    path('signup',views.signup, name="signup"),
    path('about/', views.about, name="about"),
    path('product-detail/', views.product_detail, name="product-detail"),
    path('all-collation/', views.all_collation, name="all-collation"),
    path('collation/', views.collation, name="collation"),
    path('blog/', views.blog, name="blog"),

]
