from django.db import models

# Create your models here.

class Contact(models.Model):
    fname=models.CharField(max_length=100)
    lname=models.CharField(max_length=100)
    email=models.EmailField()
    mobile=models.PositiveIntegerField()
    message=models.TextField()

    def __str__(self):
        return self.fname+ " " + self.lname
    

class User(models.Model):
    fname=models.CharField(max_length=100)
    lname=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    mobile=models.CharField(max_length=10)
    address=models.TextField()
    date=models.DateField()
    age=models.PositiveIntegerField()
    password=models.CharField(max_length=100)
    profile_picture=models.ImageField(upload_to='profile_picture/',null=True, blank=True)
    GENDER_CHOICES=(
        ('male','Male'),
        ('female', 'Female'),
        ('other', 'Other')
    )
    gender=models.CharField(max_length=100, choices=GENDER_CHOICES)

    USER_TYPE_CHOICES = (
        ('admin', 'Admin'),
        ('doctor','Doctor'),
        ('patient','Patient')
    )
    usertype=models.CharField(max_length=100,choices=USER_TYPE_CHOICES,default='patient')

    def __str__(self):
        return self.fname + " " + self.lname

    


