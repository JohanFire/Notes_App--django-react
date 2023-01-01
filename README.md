# Notes_App--django-react
 Notes app using django + react integration.

for a real production case, it is a good practice to do backend & frontend in separate repos.
But in this case due it's a small project and it is for practice, I will kept both in the same repo.

---
# Backend
## Set Up Django Project
- Create a virtual environment
```bash
    python3 -m venv .venv
```

### Install Django
inside the virtual environment
```bash
    pip install django
```

### Create Django Project
```bash
    django-admin startproject notes_app
```

### Start Django Project
```bash
    python manage.py runserver
```

### Create Django App
```bash
    python manage.py startapp api
```

---

## Migrations
### Migrate
Initial migrations from django
```bash
    python manage.py migrate
```

### Create Migration
migrate the changes to the db
```bash
    python manage.py makemigrations
```
### Migrate
convert our new Note model into a table in our database
```bash
    python manage.py migrate
```

---

## Django Admin Panel
### Create Super User
```bash
    python manage.py createsuperuser
```

### Register Note model in django admin panel
```python
    # api/admin.py
    from django.contrib import admin
    from .models import Note

    admin.site.register(Note)
```

---

## Django Rest Framework
Django REST framework is a powerful and flexible toolkit for building Web APIs.
we could do all this manually, but it would be a lot of work. Instead, we can use Django REST framework to handle the serialization for us.
### Install Django Rest Framework
```bash
    pip install djangorestframework
```

### Add rest_framework to INSTALLED_APPS
```python
    # notes_app/settings.py
    INSTALLED_APPS = [
        ...
        'rest_framework',
    ]
```

---

# Frontend
## Create React App
This time will use create react app, maybe in a real use case I shouldn't use it, but for this case is ok.
```bash
    npx create-react-app frontend
```

---

## CORS bug fixing
https://pypi.org/project/django-cors-headers/
### Install django-cors-headers
```bash
    pip install django-cors-headers
```

### Add corsheaders to INSTALLED_APPS
```python
    # notes_app/settings.py
    INSTALLED_APPS = [
        ...
        'corsheaders',
    ]
```

### Add corsheaders middleware
```python
    # notes_app/settings.py
    MIDDLEWARE = [
        ...
        'corsheaders.middleware.CorsMiddleware',
        # 'django.middleware.common.CommonMiddleware',
    ]
```

### Add corsheaders config
```python
    # notes_app/settings.py
    CORS_ALLOWED_ORIGINS = [] # allow only whitelisted origins
    # or
    CORS_ORIGIN_ALLOW_ALL = True # allow all origins
    # or
    CORS_ORIGIN_WHITELIST = [] # allow only whitelisted origins
    # or
    CORS_ORIGIN_REGEX_WHITELIST = [] # allow only whitelisted origins with regex
    # or
```

---

## React Router Dom
https://reactrouter.com/web/guides/quick-start
### Install react-router-dom
```bash
    npm install react-router-dom
```

---

# Integrate React App with Django Project
Having the frontend & backend in the same URL, so we can use the same domain for both.
This means if I go to 127.0.0.1:8000   I should see the frontend. 
And if I go to 127.0.0.1:8000/api/   I should see the backend.
## Add frontend to django project
move the frontend folder to the root of the django project

## Run npm build in frontend folder
The build is in the .gitignore so will have tu build it manually in every branch
```bash
    npm run build
```

## Add the build folder to Templates in django settings
```python
    # notes_app/settings.py
    TEMPLATES = [
        {
            ...
            'DIRS': [
                BASE_DIR / 'frontend/build'
            ],
            ...
        },
    ]
```

## Configure React's static files with Django
```python
    # notes_app/settings.py
    STATICFILES_DIRS = [
        BASE_DIR / 'frontend/build/static'
    ]
```

## Render React templates
```python
    # notes_app/urls.py
    from django.views.generic import TemplateView

    urlpatterns = [
        ...
        path('', TemplateView.as_view(template_name='index.html')),
    ]
```

## Now Django is officially holding & serving the React app
```bash
    python manage.py runserver
    # will run both backend & frontend (django & react)
```

## Theres a bug with the react router, so we need to add a catch all route
what happens in this bug is that if you go to an specific route, it will show 404 because django is looking for that route, but it doesn't exist because React is who is handling the routes.
This is fixed with:
```python
    # notes_app/urls.py
    from django.views.generic import TemplateView

    urlpatterns = [
        ...
        path('', TemplateView.as_view(template_name='index.html')),
        path('<path:path>', TemplateView.as_view(template_name='index.html')),
    ]
```