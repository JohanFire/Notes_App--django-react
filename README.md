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

