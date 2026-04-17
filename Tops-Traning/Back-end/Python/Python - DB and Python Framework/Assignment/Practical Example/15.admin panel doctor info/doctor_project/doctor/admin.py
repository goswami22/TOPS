# Register your models here.
from django.contrib import admin
from .models import Doctor

class DoctorAdmin(admin.ModelAdmin):

    # Display detailed info in list view
    list_display = ('name', 'specialty', 'city', 'experience', 'available', 'created_at')

    # Add search functionality
    search_fields = ('name', 'specialty', 'city')

    # Add filters in sidebar
    list_filter = ('specialty', 'available', 'city')

    # Make availability editable
    list_editable = ('available',)

    # Add date navigation
    date_hierarchy = 'created_at'

    # Pagination
    list_per_page = 10

    # Organize form layout
    fieldsets = (
        ('Doctor Information', {
            'fields': ('name', 'specialty', 'experience')
        }),
        ('Location & Status', {
            'fields': ('city', 'available')
        }),
    )

admin.site.register(Doctor, DoctorAdmin)
admin.site.site_header = "Doctor Management Admin"
admin.site.site_title = "Doctor Admin"
admin.site.index_title = "Welcome to Doctor Dashboard"