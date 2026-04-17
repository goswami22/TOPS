from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    instructor = models.CharField(max_length=100)
    duration = models.IntegerField(default=1)
    thumbnail = models.ImageField(upload_to='course_thumbnails/', blank=True, null=True)
    video = models.FileField(upload_to='course_videos/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    profile_picture = models.ImageField(upload_to='student_profiles/', blank=True, null=True)
    enrolled_courses = models.ManyToManyField(Course, related_name='students', blank=True)
    registration_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
