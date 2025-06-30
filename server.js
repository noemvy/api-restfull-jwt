require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json()); 

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/categories', require('./routes/category.routes'));
app.use('/api/reviews', require('./routes/review.routes'));

// Conexión a DB y puerto
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
