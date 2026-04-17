import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'edutracker_project.settings')
django.setup()

from django.contrib.auth import get_user_model
User = get_user_model()

if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin')
    print("Default admin user created: admin / admin")
else:
    print("Admin user already exists.")
