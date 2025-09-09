# 📦 Product Management App – Monorepo

Este monorepo contiene la aplicación de gestión de productos, separada en dos carpetas principales:

- `backend/` → Backend desarrollado con **NestJS** y **Prisma (Postgres)**
- `frontend/` → Frontend desarrollado con **Next.js** y **TypeScript**

---

## 🗂 Estructura del proyecto

### Backend (`backend/src`)

```
backend/src
├── app.module.ts
├── database
│   ├── prisma.module.ts
│   └── prisma.service.ts
├── main.ts
└── products
    ├── dto
    │   ├── create-product.dto.ts
    │   └── update-product.dto.ts
    ├── entities
    │   └── product.entity.ts
    ├── products.controller.ts
    ├── products.module.ts
    └── products.service.ts
```

### Frontend (`frontend/src`)

```
frontend/src
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── atoms
│   ├── molecules
│   └── organisms
├── hooks
├── lib
├── schemas
└── stores
```

---

## ⚙️ Variables de entorno

### Backend (`backend/.env`)

```env
POSTGRES_DB=productdb
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin123
POSTGRES_HOST=postgres_db
POSTGRES_PORT=5432
DATABASE_URL="postgresql://admin:admin123@localhost:5432/productdb"
PORT=4000
```

### Frontend (`frontend/.env`)

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

---

## 🚀 Cómo correr la aplicación

### 1️⃣ Backend

Desde la carpeta `backend/`:

```bash
# Levanta la base de datos (opcional si no se usa Docker)
sudo docker compose up --build -d

# Instala dependencias
npm install

# Corre el backend en modo desarrollo (hot reload)
npm run start:dev
```

**El backend estará disponible en:** `http://localhost:4000`

### 2️⃣ Frontend

Desde la carpeta `frontend/`:

```bash
# Instala dependencias
npm install

# Corre el frontend en modo desarrollo (hot reload)
npm run dev
```

**El frontend estará disponible en:** `http://localhost:3000`

---

## ✅ Notas importantes

- La API del backend expone endpoints CRUD para productos en `/products`
- El frontend consume la API usando **Axios** y **Zustand** para manejo de estado
- Para desarrollo, asegúrate de que los contenedores Docker (PostgreSQL) estén corriendo si decides usar Docker para la base de datos

---

## 🧩 Tecnologías principales

**Backend:**

- NestJS
- Prisma
- PostgreSQL

**Frontend:**

- Next.js 13
- TypeScript
- Zustand
- Axios

**Estilo y UI:**

- CSS modular + componentes reutilizables
