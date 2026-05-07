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