# WriteSphere Blogging Platform
Built by BlogX Solutions for WriteHub Community.

## Overview
WriteSphere is a modern, full-stack blogging platform built with Django. It features a rich text editor, category/tag filtering, user interactions (likes, comments, follows), and role-based access control.

## Local Development (Windows)

1. **Activate Virtual Environment**
   ```bash
   .\venv\Scripts\activate
   ```

2. **Database Setup**
   By default, local development uses `SQLite3`. To use MySQL, set `USE_MYSQL=True` in your `.env` file and configure the MySQL server credentials there.

3. **Run Server**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   python manage.py runserver
   ```

---

## Guide: Deploying to PythonAnywhere with MySQL

Follow these steps to deploy WriteSphere to a live production environment on [PythonAnywhere](https://www.pythonanywhere.com/).

### 1. Account Setup & Source Code
1. Register for a PythonAnywhere account.
2. Open a bash console from your dashboard.
3. Clone your GitHub repository (or upload a ZIP of this project):
   ```bash
   git clone https://github.com/your-username/writesphere.git
   ```

### 2. Virtual Environment Setup
1. Create a virtual environment using `mkvirtualenv`:
   ```bash
   mkvirtualenv --python=/usr/bin/python3.10 myvenv
   ```
2. Install pip dependencies:
   ```bash
   workon myvenv
   cd writesphere
   pip install -r requirements.txt
   ```
   *(Note: You can generate `requirements.txt` locally using `pip freeze > requirements.txt`)*

### 3. MySQL Database Configuration
1. Go to the **Databases** tab on PythonAnywhere.
2. Set a database password to initialize your MySQL Server.
3. Your database name will be formatted as `yourusername$default` (e.g., `janedoe$writesphere`).
4. In your PythonAnywhere bash console, create a `.env` file in the project's root:
   ```env
   SECRET_KEY=your_production_secret_key
   DEBUG=False
   USE_MYSQL=True
   DB_NAME=yourusername$writesphere
   DB_USER=yourusername
   DB_PASSWORD=your_database_password
   DB_HOST=yourusername.mysql.pythonanywhere-services.com
   ```

### 4. Running Migrations & Collecting Static Files
In the bash console with your virtual environment active:
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput
python manage.py createsuperuser
```

### 5. Web App Configuration
1. Go to the **Web** tab and click **Add a new web app**.
2. Choose **Manual configuration** (do NOT choose the Django option, as it uses an older version of Django by default).
3. Select your Python version (e.g., `Python 3.10`).
4. Under the **Virtualenv** section, enter the path to your venv:
   `/home/yourusername/.virtualenvs/myvenv`
5. Under the **Code** section, set the Source Code directory to:
   `/home/yourusername/writesphere/`
6. Edit the **WSGI configuration file** (click the link). Delete the default code and replace it with:
   ```python
   import os
   import sys
   from dotenv import load_dotenv
   
   path = '/home/yourusername/writesphere'
   if path not in sys.path:
       sys.path.append(path)
       
   project_folder = os.path.expanduser('~/writesphere')
   load_dotenv(os.path.join(project_folder, '.env'))

   os.environ['DJANGO_SETTINGS_MODULE'] = 'writesphere.settings'

   from django.core.wsgi import get_wsgi_application
   application = get_wsgi_application()
   ```

### 6. Static and Media Files
In the **Web** tab, scroll down to the **Static files** section and enter the mappings:
- URL: `/static/` -> Directory: `/home/yourusername/writesphere/staticfiles`
- URL: `/media/` -> Directory: `/home/yourusername/writesphere/media`

### 7. Finalize
1. Reload your Web App using the button at the top of the **Web** tab.
2. Visit your live site!
