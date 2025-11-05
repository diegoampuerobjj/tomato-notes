# 🍅 Tomato Notes – Full Stack Assessment

Small notes management app built with **Django REST Framework** + **Next.js**.

---

## Tech Stack
- **Backend:** Django 5, DRF, Postgres, Dockerized
- **Frontend:** Next.js 16, Axios, minimal UI
- **Infrastructure:** Docker Compose (db, api, web)

---

## Run Instructions

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/tomato-notes.git
cd tomato-notes
```

### 2. Build and start all services

```bash
docker compose up --build
```

### 3. Access

Frontend → `http://localhost:3000`

Backend API → `http://localhost:8000/api/notes/`

Django admin → `http://localhost:8000/admin/`

### Environment Variables
``` bash
backend/.env
DJANGO_SECRET_KEY=dev
DJANGO_DEBUG=1
DB_NAME=notes
DB_USER=notes
DB_PASSWORD=notes
DB_HOST=db
DB_PORT=5432
ALLOWED_HOSTS=*

frontend/.env.local
NEXT_PUBLIC_API_BASE=http://localhost:8000
```

### Notes

Change NEXT_PUBLIC_API_BASE to http://api:8000 if running both frontend and backend inside Docker.

For local Next.js testing (npm run dev), keep it as http://localhost:8000.

### Development

To test backend locally:

```bash
cd backend
docker compose run api python manage.py runserver
```

To test frontend locally:

```bash
cd frontend
npm run dev
```

### Project Structure
tomato-notes/
├── backend/
│   ├── core/
│   ├── notes/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   ├── .env.local
│   └── package.json
└── docker-compose.yml

### Author
Diego Ampuero
