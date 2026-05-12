from django.db import models

# Create your models here.

class Contact(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    mobile=models.CharField(max_length=15)
    message=models.TextField()

    def __str__(self):
        return self.name
    
class User(models.Model):
    fname=models.CharField(max_length=100) 
    lname=models.CharField(max_length=100)
    email=models.EmailField() 
    phone=models.CharField(max_length=15)  
    gender_type=(
        ('male','Male'),
        ('female','Female'),
        ('other','Other')
    )
    gender=models.CharField(max_length=10, choices=gender_type)
    address=models.TextField()
    profile_picture=models.ImageField(upload_to='profile_picture/')
    password=models.CharField(max_length=100)
    usertype=models.CharField(max_length=10, default='buyer')
    
    def __str__(self):
        return self.fname + " " + self.lname
    
    
class Product(models.Model):
    category=(
        ("Car Suspension","Car Suspension"),
        ("Car Engine","Car Engine"),
        ("Engine Oil Service","Engine Oil Service"),
        ("Engine Scan","Engine Scan"),
        ("Break Disc","Break Disc"),
        ("Electrical Works","Electrical Works")
    )
    
    seller= models.ForeignKey(User, on_delete=models.CASCADE)
    product_category=models.CharField(max_length=100, choices=category)
    product_name= models.CharField(max_length=100)
    product_desc=models.TextField()
    product_picture=models.ImageField(upload_to="product_picture/")
    product_price=models.DecimalField(max_digits=10, decimal_places=2)
    product_discount=models.CharField(max_length=20)
    
    
    def __str__(self):
        return self.seller.fname + " - " +self.product_name 