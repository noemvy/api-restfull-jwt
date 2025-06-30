const router = require('express').Router();
const controller = require('../controllers/review.controller');
const auth = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validation.middleware'); 

////Validate es para que si se envio un campo vacio, mande la alerta que todos los campos son obligatorios.
router.post('/', auth, validate, controller.create); 
router.get('/product/:id', controller.listByProduct);
router.put('/:id', auth, controller.update);
router.delete('/:id', auth, controller.delete);
module.exports = router;
