import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'edutracker_project.settings')
django.setup()

from api.models import Course

courses = [
    "Django Rest Framework Basics",
    "Advanced Python",
    "Next.js Fullstack",
    "Frontend Mastery with Vue",
    "Cloud Deployment & AWS",
    "Data Science Algorithms",
    "Machine Learning Crash Course",
    "Docker & Kubernetes Essentials"
]

for title in courses:
    Course.objects.get_or_create(title=title, defaults={"description": "Sample course description"})

print("Courses seeded successfully!")
