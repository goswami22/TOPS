from django.db import models

# Create your models here.


class Student(models.Model):
    name=models.CharField(max_length=100, blank=True)
    age=models.PositiveIntegerField()
    email=models.EmailField()
    mobile=models.PositiveIntegerField()
    address=models.TextField()
    course = models.CharField(max_length=100, blank=True)
    


    def __str__(self):
        return self.name
