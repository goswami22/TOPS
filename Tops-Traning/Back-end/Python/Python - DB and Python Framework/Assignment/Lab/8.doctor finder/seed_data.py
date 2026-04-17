"""
Seed script to populate the Doctor Finder database with sample data.
Run with: python seed_data.py  (after activating Django environment)
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'doctor_project.settings')
django.setup()

from doctors.models import Specialty, Doctor

# Clear existing data
Doctor.objects.all().delete()
Specialty.objects.all().delete()

print("Seeding specialties...")

specialties_data = [
    {"name": "Cardiology", "icon": "❤️"},
    {"name": "Dermatology", "icon": "🧴"},
    {"name": "Neurology", "icon": "🧠"},
    {"name": "Orthopedics", "icon": "🦴"},
    {"name": "Pediatrics", "icon": "👶"},
    {"name": "Gynecology", "icon": "🌸"},
    {"name": "Ophthalmology", "icon": "👁️"},
    {"name": "ENT", "icon": "👂"},
    {"name": "Psychiatry", "icon": "🧘"},
    {"name": "General Medicine", "icon": "🩺"},
]

specialties = {}
for s in specialties_data:
    sp = Specialty.objects.create(**s)
    specialties[s["name"]] = sp
    print(f"  ✓ {s['name']}")

print("\nSeeding doctors...")

doctors_data = [
    {
        "name": "Arjun Mehta",
        "specialty": "Cardiology",
        "experience_years": 18,
        "rating": 4.9,
        "total_reviews": 342,
        "hospital": "Apollo Hospital",
        "address": "Bandra West",
        "city": "Mumbai",
        "phone": "+91 98200 11111",
        "email": "arjun.mehta@apollo.in",
        "consultation_fee": 1200,
        "availability": "available",
        "latitude": 19.0607,
        "longitude": 72.8362,
        "bio": "Dr. Arjun Mehta is a senior interventional cardiologist with over 18 years of experience. He specializes in complex cardiac interventions and has performed over 5000 angioplasties.",
        "education": "MBBS - Grant Medical College | MD (Cardiology) - KEM Hospital | Fellowship - Johns Hopkins, USA",
        "languages": "English, Hindi, Marathi",
        "is_verified": True,
    },
    {
        "name": "Priya Sharma",
        "specialty": "Dermatology",
        "experience_years": 10,
        "rating": 4.8,
        "total_reviews": 215,
        "hospital": "Fortis Hospital",
        "address": "Mulund West",
        "city": "Mumbai",
        "phone": "+91 98200 22222",
        "email": "priya.sharma@fortis.in",
        "consultation_fee": 800,
        "availability": "available",
        "latitude": 19.1762,
        "longitude": 72.9561,
        "bio": "Dr. Priya Sharma is a renowned dermatologist specializing in cosmetic dermatology and skin diseases. She is known for her expertise in acne treatment and laser therapies.",
        "education": "MBBS - Lokmanya Tilak Medical College | MD (Dermatology) - KEM Hospital",
        "languages": "English, Hindi, Gujarati",
        "is_verified": True,
    },
    {
        "name": "Vikram Nair",
        "specialty": "Neurology",
        "experience_years": 22,
        "rating": 4.9,
        "total_reviews": 410,
        "hospital": "Kokilaben Hospital",
        "address": "Andheri West",
        "city": "Mumbai",
        "phone": "+91 98200 33333",
        "email": "vikram.nair@kokilaben.in",
        "consultation_fee": 1500,
        "availability": "busy",
        "latitude": 19.1340,
        "longitude": 72.8267,
        "bio": "Dr. Vikram Nair is a leading neurologist specializing in stroke management, epilepsy and movement disorders. He has published 40+ research papers in international journals.",
        "education": "MBBS - AIIMS Delhi | MD (Neurology) - NIMHANS Bangalore | Fellowship - Mayo Clinic, USA",
        "languages": "English, Hindi, Malayalam",
        "is_verified": True,
    },
    {
        "name": "Sneha Joshi",
        "specialty": "Pediatrics",
        "experience_years": 14,
        "rating": 4.7,
        "total_reviews": 289,
        "hospital": "Nanavati Hospital",
        "address": "Vile Parle West",
        "city": "Mumbai",
        "phone": "+91 98200 44444",
        "email": "sneha.joshi@nanavati.in",
        "consultation_fee": 700,
        "availability": "available",
        "latitude": 19.1006,
        "longitude": 72.8311,
        "bio": "Dr. Sneha Joshi is a compassionate pediatrician with 14 years of experience in child healthcare. She specializes in neonatal care and childhood developmental disorders.",
        "education": "MBBS - Seth GS Medical College | MD (Pediatrics) - BJ Medical College, Pune",
        "languages": "English, Hindi, Marathi",
        "is_verified": True,
    },
    {
        "name": "Rahul Kapoor",
        "specialty": "Orthopedics",
        "experience_years": 16,
        "rating": 4.8,
        "total_reviews": 178,
        "hospital": "Hinduja Hospital",
        "address": "Mahim West",
        "city": "Mumbai",
        "phone": "+91 98200 55555",
        "email": "rahul.kapoor@hinduja.in",
        "consultation_fee": 1000,
        "availability": "available",
        "latitude": 19.0395,
        "longitude": 72.8406,
        "bio": "Dr. Rahul Kapoor is an orthopedic surgeon specializing in joint replacement and sports medicine. He has performed over 3000 successful knee and hip replacement surgeries.",
        "education": "MBBS - Grant Medical College | MS (Orthopedics) - KEM Hospital | Fellowship - Royal College, UK",
        "languages": "English, Hindi, Punjabi",
        "is_verified": True,
    },
    {
        "name": "Anjali Singh",
        "specialty": "Gynecology",
        "experience_years": 20,
        "rating": 4.9,
        "total_reviews": 520,
        "hospital": "Wockhardt Hospital",
        "address": "South Mumbai",
        "city": "Mumbai",
        "phone": "+91 98200 66666",
        "email": "anjali.singh@wockhardt.in",
        "consultation_fee": 900,
        "availability": "available",
        "latitude": 18.9642,
        "longitude": 72.8240,
        "bio": "Dr. Anjali Singh is a senior gynecologist and obstetrician with expertise in high-risk pregnancies, laparoscopic surgeries, and women's reproductive health.",
        "education": "MBBS - Mumbai University | MD (Obstetrics & Gynecology) - JJ Hospital | DNB - National Board",
        "languages": "English, Hindi, Bengali",
        "is_verified": True,
    },
    {
        "name": "Rohan Desai",
        "specialty": "General Medicine",
        "experience_years": 8,
        "rating": 4.6,
        "total_reviews": 132,
        "hospital": "City Hospital",
        "address": "Powai",
        "city": "Mumbai",
        "phone": "+91 98200 77777",
        "email": "rohan.desai@city.in",
        "consultation_fee": 500,
        "availability": "available",
        "latitude": 19.1197,
        "longitude": 72.9050,
        "bio": "Dr. Rohan Desai is a general medicine specialist with expertise in chronic disease management, diabetes, and preventive healthcare.",
        "education": "MBBS - Pune University | MD (General Medicine) - Sassoon Hospital, Pune",
        "languages": "English, Hindi, Marathi, Gujarati",
        "is_verified": True,
    },
    {
        "name": "Kavita Reddy",
        "specialty": "Psychiatry",
        "experience_years": 12,
        "rating": 4.8,
        "total_reviews": 96,
        "hospital": "NIMHANS Centre",
        "address": "Banjara Hills",
        "city": "Hyderabad",
        "phone": "+91 98300 11111",
        "email": "kavita.reddy@nimhans.in",
        "consultation_fee": 1100,
        "availability": "available",
        "latitude": 17.4150,
        "longitude": 78.4482,
        "bio": "Dr. Kavita Reddy is a senior psychiatrist specializing in anxiety disorders, depression, and cognitive behavioral therapy. She has helped thousands of patients lead better mental health.",
        "education": "MBBS - Osmania Medical College | MD (Psychiatry) - NIMHANS Bangalore",
        "languages": "English, Hindi, Telugu",
        "is_verified": True,
    },
    {
        "name": "Suresh Patel",
        "specialty": "Ophthalmology",
        "experience_years": 25,
        "rating": 4.9,
        "total_reviews": 680,
        "hospital": "Dr. Shroff's Eye Centre",
        "address": "Connaught Place",
        "city": "Delhi",
        "phone": "+91 98100 11111",
        "email": "suresh.patel@shroffs.in",
        "consultation_fee": 1300,
        "availability": "busy",
        "latitude": 28.6315,
        "longitude": 77.2190,
        "bio": "Dr. Suresh Patel is one of India's foremost ophthalmologists with 25+ years of experience in cataract surgery, LASIK, and retinal disorders.",
        "education": "MBBS - AIIMS | MS (Ophthalmology) - AIIMS | Fellowship - Moorfields Eye Hospital, London",
        "languages": "English, Hindi, Gujarati",
        "is_verified": True,
    },
    {
        "name": "Meera Krishnan",
        "specialty": "ENT",
        "experience_years": 11,
        "rating": 4.7,
        "total_reviews": 143,
        "hospital": "Manipal Hospital",
        "address": "Whitefield",
        "city": "Bangalore",
        "phone": "+91 98440 11111",
        "email": "meera.krishnan@manipal.in",
        "consultation_fee": 750,
        "availability": "available",
        "latitude": 12.9716,
        "longitude": 77.5946,
        "bio": "Dr. Meera Krishnan is an expert ENT surgeon specializing in endoscopic sinus surgery, cochlear implants, and voice disorders.",
        "education": "MBBS - Bangalore Medical College | MS (ENT) - Kasturba Medical College",
        "languages": "English, Hindi, Kannada, Tamil",
        "is_verified": True,
    },
]

for d in doctors_data:
    specialty_name = d.pop("specialty")
    doctor = Doctor.objects.create(
        specialty=specialties[specialty_name],
        **d
    )
    print(f"  ✓ Dr. {doctor.name} — {specialty_name}")

print(f"\n✅ Done! Created {Specialty.objects.count()} specialties and {Doctor.objects.count()} doctors.")
print("\nVisit http://127.0.0.1:8000 to see your Doctor Finder app!")
