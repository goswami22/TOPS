from django.db import models

# Create your models here.

class Contact(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    subject=models.CharField(max_length=100)
    message=models.TextField()

    def __str__(self):
        return self.name

class User(models.Model):
    fname=models.CharField(max_length=100)
    lname=models.CharField(max_length=100)
    email=models.EmailField()
    mobile=models.PositiveIntegerField()
    password=models.CharField(max_length=100)
    address=models.TextField()
    profile_picture=models.ImageField(upload_to='profile_picture/',null=True, blank=True)
    usertype=models.CharField(max_length=100, default='buyer')

    def __str__(self):
        return self.fname+ " "+self.lname