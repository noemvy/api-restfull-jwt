const router = require('express').Router();
const controller = require('../controllers/category.controller');
const auth = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validation.middleware'); 

// Crear categoría (autenticado y con validación)
router.post('/', auth, validate, controller.create);

// Listar categorías 
router.get('/', controller.list);

// Editar categoría (autenticado y validado)
router.put('/:id', auth, validate, controller.update);

// Eliminar categoría (autenticado)
router.delete('/:id', auth, controller.delete);

module.exports = router;
