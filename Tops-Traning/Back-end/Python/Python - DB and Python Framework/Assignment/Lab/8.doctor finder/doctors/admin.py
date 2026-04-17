from django.contrib import admin
from .models import Doctor, Specialty, Appointment


@admin.register(Specialty)
class SpecialtyAdmin(admin.ModelAdmin):
    list_display = ['name', 'icon', 'doctor_count']
    search_fields = ['name']

    def doctor_count(self, obj):
        return obj.doctors.count()
    doctor_count.short_description = 'Number of Doctors'


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ['name', 'specialty', 'hospital', 'city', 'rating', 'availability', 'is_verified']
    list_filter = ['specialty', 'availability', 'city', 'is_verified']
    search_fields = ['name', 'hospital', 'city', 'email']
    list_editable = ['availability', 'is_verified']
    readonly_fields = ['created_at']
    fieldsets = (
        ('Personal Info', {
            'fields': ('name', 'photo', 'bio', 'education', 'languages')
        }),
        ('Professional Info', {
            'fields': ('specialty', 'experience_years', 'hospital', 'consultation_fee')
        }),
        ('Location', {
            'fields': ('address', 'city', 'latitude', 'longitude')
        }),
        ('Contact', {
            'fields': ('phone', 'email')
        }),
        ('Status', {
            'fields': ('availability', 'rating', 'total_reviews', 'is_verified', 'created_at')
        }),
    )


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ['patient_name', 'doctor', 'appointment_date', 'appointment_time', 'status']
    list_filter = ['status', 'appointment_date', 'doctor__specialty']
    search_fields = ['patient_name', 'patient_email', 'doctor__name']
    list_editable = ['status']
    date_hierarchy = 'appointment_date'


# Customize admin site
admin.site.site_header = "🏥 Doctor Finder Admin"
admin.site.site_title = "Doctor Finder"
admin.site.index_title = "Welcome to Doctor Finder Dashboard"
