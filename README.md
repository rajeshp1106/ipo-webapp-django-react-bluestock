# 🐍 Bluestock IPO Web App (Django Version)

This repository contains the **Django-based** implementation of the IPO Web Application for Bluestock Fintech. The app displays public IPO-related information and provides an admin dashboard for internal management.

---

## 📌 Project Objective

Develop a web app that displays IPO-related data such as:
- Company logo, name
- Price band, open/close dates
- Issue size, type, listing date
- Status, IPO/listing price, gain %, CMP, current return
- Downloadable RHP and DRHP PDFs

---

## ⚙️ Tech Stack

| Layer      | Stack                                  |
|------------|-----------------------------------------|
| Backend    | Django 5.0.6 + Django REST Framework 3.15.1 |
| Frontend   | HTML, CSS, JavaScript, Bootstrap 5     |
| Database   | PostgreSQL                             |
| Tools      | Postman, GitHub, VS Code               |

---

## 🗂️ Folder Structure

ipo-webapp-django-bluestock/
├── backend/                 # Django REST API
│   └── ipo_api/            # Django project folder (startproject)
├── frontend/                # HTML/CSS/Bootstrap files
├── assets/                  # Logos, PDFs, icons
├── README.md
└── .gitignore

---

## 🛠️ Setup Instructions

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Use `venv\Scripts\activate` on Windows
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
