from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Core app URLs
    path('', include('core.urls')),
    # allauth URLs
    path('accounts/', include('allauth.urls')),
]
