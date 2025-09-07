# Product Management App - Backend

Backend API desarrollado con NestJS y Prisma para la gestión de productos.

## 🚀 Tecnologías

- **Framework**: NestJS
- **Base de datos**: Prisma ORM
- **Lenguaje**: TypeScript
- **Arquitectura**: RESTful API

## 📁 Estructura del proyecto

```
src/
├── app.module.ts              # Módulo principal de la aplicación
├── database/                  # Configuración de base de datos
│   ├── prisma.module.ts       # Módulo de Prisma
│   └── prisma.service.ts      # Servicio de conexión a Prisma
├── main.ts                    # Punto de entrada de la aplicación
└── products/                  # Módulo de productos
    ├── dto/                   # Data Transfer Objects
    │   ├── create-product.dto.ts
    │   └── update-product.dto.ts
    ├── entities/              # Entidades del dominio
    │   └── product.entity.ts
    ├── products.controller.ts # Controlador de productos
    ├── products.module.ts     # Módulo de productos
    └── products.service.ts    # Lógica de negocio de productos
```

## 🛠️ Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/Jamova01/product-management-app
   cd product-management-app/backend
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   Crear un archivo `.env` en la raíz del proyecto:

   ```env
   POSTGRES_DB=""
   POSTGRES_USER=""
   POSTGRES_PASSWORD=""
   POSTGRES_HOST=""
   POSTGRES_PORT=""
   DATABASE_URL="your-database-connection-string"
   ```

4. **Configurar la base de datos**

   ```bash
   # Generar el cliente de Prisma
   npx prisma generate

   # Ejecutar migraciones
   npx prisma db push
   ```

## 🚦 Ejecutar la aplicación

### Desarrollo

```bash
npm run start:dev
```

### Producción

```bash
npm run build
npm run start:prod
```

La API estará disponible en `http://localhost:3000`

## 📚 API Endpoints

### Productos

| Método | Endpoint        | Descripción                 |
| ------ | --------------- | --------------------------- |
| GET    | `/products`     | Obtener todos los productos |
| GET    | `/products/:id` | Obtener un producto por ID  |
| POST   | `/products`     | Crear un nuevo producto     |
| PUT    | `/products/:id` | Actualizar un producto      |
| DELETE | `/products/:id` | Eliminar un producto        |

### Ejemplos de uso

**Crear un producto:**

```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Paracetamol 500mg",
    "description": "Tabletas analgésicas y antipiréticas para el alivio del dolor leve a moderado y la fiebre.",
    "price": 4.50,
    "imageUrl": "https://example.com/images/paracetamol-500.jpg"
  }'
```

**Obtener todos los productos:**

```bash
curl http://localhost:3000/products
```

**Obtener un producto específico:**

```bash
curl http://localhost:3000/products/1
```

**Actualizar un producto:**

```bash
curl -X PUT http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Producto Actualizado",
    "price": 39.99
  }'
```

**Eliminar un producto:**

```bash
curl -X DELETE http://localhost:3000/products/1
```

## 📊 Base de datos

El proyecto utiliza Prisma como ORM. Para gestionar la base de datos:

```bash
# Ver la base de datos en el navegador
npx prisma studio

# Resetear la base de datos
npx prisma db reset

# Ver el estado de las migraciones
npx prisma migrate status
```

## 🔧 Scripts disponibles

- `npm run start` - Ejecutar en modo desarrollo
- `npm run start:dev` - Ejecutar en modo desarrollo con hot reload
- `npm run start:prod` - Ejecutar en modo producción
- `npm run build` - Construir la aplicación
- `npm run test` - Ejecutar tests
- `npm run lint` - Ejecutar linter
- `npm run format` - Formatear código

## 📝 Notas de desarrollo

### DTOs (Data Transfer Objects)

- **CreateProductDto**: Define la estructura para crear productos
- **UpdateProductDto**: Define la estructura para actualizar productos (campos opcionales)

### Validación

El proyecto utiliza class-validator para la validación de datos de entrada.

### Manejo de errores

Los errores se manejan de forma centralizada y retornan respuestas HTTP apropiadas.

## 🚀 Despliegue

### Docker

```bash
# Construir y levantar los contenedores definidos en docker-compose en modo detached
sudo docker compose up --build -d

```

### Variables de entorno para producción

```env
DATABASE_URL="postgresql://user:password@host:port/database"
NODE_ENV=production
PORT=3000
```

## 🤝 Contribuir

1. Fork del proyecto
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

## 📞 Contacto

Para preguntas o soporte, contacta a [jorgemova01@gmail.com]
