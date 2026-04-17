# Register your models here.
from django.contrib import admin
from .models import Doctor, Review


class DoctorAdmin(admin.ModelAdmin):
    
   list_display = ('name', 'specialization', 'city', 'available', 'created_at')
   search_fields = ('name', 'specialization')
   list_filter = ('specialization', 'available', 'city')
   list_editable = ('available',)
   date_hierarchy = 'created_at'
   list_per_page = 10
fieldsets = (
        ('Doctor Info', {
            'fields': ('name', 'specialization')
        }),
        ('Availability', {
            'fields': ('city', 'available')
        }),
    )
class ReviewInline(admin.TabularInline):
    model = Review
    extra = 1

class DoctorAdmin(admin.ModelAdmin):
    inlines = [ReviewInline]


admin.site.register(Doctor, DoctorAdmin)
admin.site.site_header = "Doctor Finder Admin"
admin.site.site_title = "Admin Panel"
admin.site.index_title = "Welcome to Dashboard"