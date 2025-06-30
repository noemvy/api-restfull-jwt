const router = require('express').Router();
const controller = require('../controllers/product.controller');
const auth = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validation.middleware'); 

// Rutas protegidas y validadas
router.post('/', auth, validate, controller.create); 

// Rutas públicas
router.get('/', controller.list);
router.get('/:id', controller.detail);

// Rutas protegidas
router.put('/:id', auth, controller.update);
router.delete('/:id', auth, controller.delete);

module.exports = router;