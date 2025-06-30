## 🔐 Autenticación

### ✅ Registro
**POST** `/api/auth/register`

**Cuerpo:**
```json
{
  "username": "usuario123",
  "password": "123456",
  "full_name": "Nombre Apellido"
}
```

### ✅ Login
**POST** `/api/auth/login`

**Cuerpo:**
```json
{
  "username": "usuario123",
  "password": "123456"
}
```

**Respuesta:**
```json
{
  "token": "JWT_TOKEN"
}
```

---

## 👤 Usuario

### ✅ Ver perfil (requiere token)
**GET** `/api/users/profile`

**Header:**
```
Authorization: Bearer JWT_TOKEN
```

**Respuesta:**
```json
{
  "id": "...",
  "username": "usuario123",
  "full_name": "Nombre Apellido"
}
```

---

## 📁 Categorías

### ✅ Crear categoría
**POST** `/api/categories`

**Header:**
```
Authorization: Bearer JWT_TOKEN
```

**Cuerpo:**
```json
{
  "name": "Laptops",
  "description": "Computadoras portátiles"
}
```

### ✅ Listar categorías
**GET** `/api/categories`

**Respuesta:**
```json
[
  {
    "_id": "...",
    "name": "Laptops",
    "description": "Computadoras portátiles"
  }
]
```

### ✅ Editar categoría
**PUT** `/api/categories/:id`

**Header:**
```
Authorization: Bearer JWT_TOKEN
```

**Cuerpo:**
```json
{
  "name": "Smartphones",
  "description": "Teléfonos inteligentes"
}
```

### ✅ Eliminar categoría
**DELETE** `/api/categories/:id`

**Header:**
```
Authorization: Bearer JWT_TOKEN
```

**Respuesta:**
```json
{
  "message": "Categoría eliminada correctamente"
}
```

---

## 📦 Productos

### ✅ Crear producto
**POST** `/api/products`

**Header:**
```
Authorization: Bearer JWT_TOKEN
```

**Cuerpo:**
```json
{
  "name": "MacBook Pro",
  "description": "Apple M2",
  "price": 1899,
  "category_id": "id_categoria"
}
```

### ✅ Listar productos
**GET** `/api/products`

**Respuesta:**
```json
[
  {
    "_id": "...",
    "name": "MacBook Pro",
    "description": "Apple M2",
    "price": 1899,
    "category_id": {
      "_id": "...",
      "name": "Laptops"
    },
    "created_by": {
      "_id": "...",
      "username": "usuario123"
    }
  }
]
```

### ✅ Detalle de producto
**GET** `/api/products/:id`

### ✅ Editar producto
**PUT** `/api/products/:id`

**Header:**
```
Authorization: Bearer JWT_TOKEN
```

**Cuerpo:**
```json
{
  "name": "MacBook Air",
  "description": "Apple M2 Air",
  "price": 1499,
  "category_id": "id_categoria"
}
```

### ✅ Eliminar producto
**DELETE** `/api/products/:id`

**Header:**
```
Authorization: Bearer JWT_TOKEN
```

---

## 📝 Reseñas

### ✅ Crear reseña
**POST** `/api/reviews`

**Header:**
```
Authorization: Bearer JWT_TOKEN
```

**Cuerpo:**
```json
{
  "product_id": "id_producto",
  "rating": 5,
  "comment": "Excelente producto"
}
```

### ✅ Listar reseñas de un producto
**GET** `/api/reviews/product/:id`

### ✅ Editar reseña
**PUT** `/api/reviews/:id`

**Header:**
```
Authorization: Bearer JWT_TOKEN
```

**Cuerpo:**
```json
{
  "rating": 4,
  "comment": "Me gustó, pero puede mejorar"
}
```

### ✅ Eliminar reseña
**DELETE** `/api/reviews/:id`

**Header:**
```
Authorization: Bearer JWT_TOKEN
```

---

## ✅ Validaciones

- Todos los campos son obligatorios (middleware `validate`).
- `category_id` y `product_id` deben ser ObjectIds válidos.
- `rating` debe estar entre 1 y 5.
- Solo el creador de una reseña puede editarla o eliminarla.


---