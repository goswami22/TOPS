from rest_framework import serializers
from .models import Student, Course

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    # This read-only field makes it easier to see course details when fetching a student
    enrolled_courses_details = CourseSerializer(source='enrolled_courses', many=True, read_only=True)

    class Meta:
        model = Student
        fields = ['id', 'first_name', 'last_name', 'email', 'profile_picture', 'registration_date', 'enrolled_courses', 'enrolled_courses_details']
        extra_kwargs = {
            'enrolled_courses': {'required': False}
        }
