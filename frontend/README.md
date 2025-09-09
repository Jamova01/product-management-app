# 📦 Product Management App – Frontend

Frontend de la aplicación de gestión de productos, desarrollada con **Next.js**.  
Este módulo permite listar, crear y eliminar productos a través de una interfaz moderna y responsiva.

## 🚀 Tecnologías utilizadas

- **Next.js 13** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** – animaciones
- **Zustand** – manejo de estado global
- **Axios** – cliente HTTP
- **Zod** – validación de formularios
- **Sonner** – notificaciones

## 📂 Estructura del proyecto

```
frontend/src
├── app/                    # Configuración de layout, estilos globales y páginas
├── components/             # Componentes reutilizables
│   ├── atoms/             # Componentes base (Button, Card, Input, etc.)
│   ├── molecules/         # Componentes que combinan atoms (campos de formulario)
│   └── organisms/         # Componentes principales (ProductForm, ProductTable)
├── hooks/                 # Hooks personalizados
├── lib/                   # Configuración de librerías (axios, utilidades)
├── schemas/               # Esquemas de validación con Zod
└── stores/                # Estado global con Zustand
```

## ⚙️ Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/Jamova01/product-management-app.git
cd product-management-app/frontend
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la carpeta `frontend/` con lo siguiente:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

> **Nota:** Asegúrate de que `NEXT_PUBLIC_API_URL` apunte al backend en ejecución.

### 4. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

### 5. Abrir en el navegador

👉 **http://localhost:3000**

## 🖥️ Funcionalidades

- 📋 **Listado de productos** con tabla interactiva
- ➕ **Creación de productos** mediante formulario validado
- 🗑️ **Eliminación de productos** desde la tabla
- 🎨 **UI moderna y responsiva**, con feedback visual de carga y errores


## 🤝 Contribución

1. Haz un **fork** del proyecto
2. Crea una rama nueva (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz **commit** (`git commit -m 'feat: nueva funcionalidad'`)
4. Haz **push** a tu rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un **Pull Request** 🚀

## 📝 Licencia

Este proyecto fue desarrollado como **prueba técnica** y puede reutilizarse con fines educativos o de portafolio.
