from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet, CourseViewSet
from rest_framework.authtoken.views import obtain_auth_token

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'courses', CourseViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('token-auth/', obtain_auth_token, name='api_token_auth'),
]
