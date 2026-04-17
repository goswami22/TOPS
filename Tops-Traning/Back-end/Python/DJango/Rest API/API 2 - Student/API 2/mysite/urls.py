from django.contrib import admin
from django.urls import path
from myapp.views import StudentList,StudentDetail

urlpatterns = [
    path('api/Students',StudentList.as_view()),
    path('api/Students/<int:pk>',StudentDetail.as_view()),
    path('admin/', admin.site.urls),
]
