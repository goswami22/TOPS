from django.db import models


class Specialty(models.Model):
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=50, default='🏥')

    class Meta:
        verbose_name_plural = "Specialties"

    def __str__(self):
        return self.name


class Doctor(models.Model):
    AVAILABILITY_CHOICES = [
        ('available', 'Available Now'),
        ('busy', 'Busy'),
        ('offline', 'Offline'),
    ]

    name = models.CharField(max_length=200)
    specialty = models.ForeignKey(Specialty, on_delete=models.CASCADE, related_name='doctors')
    photo = models.ImageField(upload_to='doctors/', blank=True, null=True)
    experience_years = models.IntegerField(default=0)
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=4.5)
    total_reviews = models.IntegerField(default=0)
    hospital = models.CharField(max_length=200)
    address = models.TextField()
    city = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField(blank=True)
    consultation_fee = models.DecimalField(max_digits=8, decimal_places=2, default=500.00)
    availability = models.CharField(max_length=20, choices=AVAILABILITY_CHOICES, default='available')
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    bio = models.TextField(blank=True)
    education = models.CharField(max_length=300, blank=True)
    languages = models.CharField(max_length=200, default='English, Hindi')
    is_verified = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-rating', 'name']

    def __str__(self):
        return f"Dr. {self.name} - {self.specialty}"

    def get_stars(self):
        return range(int(self.rating))


class Appointment(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled'),
        ('completed', 'Completed'),
    ]

    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='appointments')
    patient_name = models.CharField(max_length=200)
    patient_email = models.EmailField()
    patient_phone = models.CharField(max_length=20)
    appointment_date = models.DateField()
    appointment_time = models.TimeField()
    reason = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.patient_name} → Dr. {self.doctor.name} on {self.appointment_date}"
