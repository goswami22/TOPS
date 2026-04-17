from django.shortcuts import render
from . models import Contact, User
from django.core.mail import send_mail
from django.conf import settings
import random 

# Create your views here.
def index(request):
    return render(request, 'index.html')

def signup(request):
    if request.method == 'POST':
        try:
            User.request.get(email=request.POST['email'])
            msg='Email Already Registred'
            return render(request,  'signup.html', {'msg':msg})
        except:
            if request.POST['password']==request.POST['c_password']:
                if request.POST['usertype'] == 'admin':
                    if request.POST.get('admin_key') != 'admin123':
                        msg="Invalid Admin Secret Key"
                        return render(request,  'signup.html',{'msg':msg})
                        
                User.objects.create(
                    usertype=request.POST['usertype'],
                    fname=request.POST['fname'],
                    lname=request.POST['lname'],
                    email=request.POST['email'],
                    mobile=request.POST['mobile'],
                    gender=request.POST['gender'],
                    address=request.POST['address'],
                    date=request.POST['date'],
                    age=request.POST['age'],
                    password=request.POST['password'],
                    profile_picture=request.FILES.get('profile_picture')
                )
                msg="User Singin Successfully"
                return render(request,  'login.html',{'msg':msg})
            else:
                msg="Password and Confirm Password Doesn't Match"
                return render(request,  'signup.html',{'msg':msg})
    else:
        return render(request,  'signup.html')

def login(request):
    if request.method == "POST":
        try:
            user=User.objects.get(email=request.POST['email'])
            if user.password==request.POST['password']:
                request.session['email']=user.email
                request.session['fname']=user.fname
                if user.usertype=='patient':
                    return render(request, 'patient-dashboard.html')
                elif user.usertype=='doctor':
                    return render(request, 'doctor-dashboard.html')
                else:
                    return render(request, 'dashboard.html')
            else:
                msg="Password Doesn't Matched"
                return render(request, 'login.html', {'msg':msg})
        except:
            msg="Email Not Registered"
            return render(request, 'login.html', {'msg':msg})
    else:
        return render(request, 'login.html')
    
    

def logout(request):
    try:
        del request.session['email']
        del request.session['fname']
        msg="Logout successfully"
        return render(request, 'login.html',{'msg':msg})
    except:
        msg="Logout successfully"
        return render(request, 'login.html')
    
def forgot_password(request):
    if request.method == 'POST':
        try:
            user=User.objects.get(email=request.POST['email'])
            otp=random.randint(100000, 999999)
            subject='OTP for forgot password'
            message='Your otp for forgot pasword is '+str(otp)
            send_mail(subject, message,settings.EMAIL_HOST_USER,[user.email,])
            request.session["otp"]=otp
            request.session['to_email']=user.email
            return render(request, 'otp.html')
        except:
            msg='Email not registred'
            return render(request, 'forgot-password.html', {'msg':msg})
    else:
         return render(request, 'forgot-password.html')

def verify_otp(request):
    otp1= int(request.POST['otp'])
    otp2= int(request.session['otp'])
    
    if otp1==otp2:
        del request.session['otp']
        msg="Set Your New Password"
        return render(request, 'new-password.html', {'msg':msg})
    else:      
        msg="Invalid OTP"
        return render(request, 'otp.html', {'msg':msg})
    

def new_password(request):
    if request.method == "POST":
        if request.POST['new_Password'] == request.POST['confirm_Password']:
            user = User.objects.get(email=request.session['to_email'])
            user.password=request.POST['new_Password']
            user.save()
            if 'to_email' in request.session:
                del request.session['to_email']
            msg="Password Updated Successfully"
            return render(request, 'login.html', {'msg':msg})
        else:
            msg="Your new password and confirm password Don't matched"
            return render(request, 'new-password.html', {'msg':msg})

    else:
        return render(request, 'new-password.html')



def dashboard(request):
    return render(request, 'dashboard.html')

def doctor_dashboard(request):
    return render(request, 'doctor-dashboard.html')

def patient_dashboard(request):
    return render(request, 'patient-dashboard.html')

def contact(request):
    if request.method == 'POST':
       Contact.objects.create(
           fname=request.POST['fname'],
           lname=request.POST['lname'],
           email=request.POST['email'],
           mobile=request.POST['mobile'],
           message=request.POST['message']   
       )
       msg='Contact Successfully Saved'
       contacts=Contact.objects.all()
       return render(request, 'contact.html', {'msg':msg, 'contacts':contacts})
    else:
        return render(request, 'contact.html')

def about(request):
    return render(request, 'about.html')

def doctors(request):
    return render(request, 'doctors.html')

def departments(request):
    return render(request, 'departments.html')

def blog(request):
    return render(request, 'blog.html')
