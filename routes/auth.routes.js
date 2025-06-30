
//Ruta para los usuarios
const router = require("express").Router();
const { register, login } = require("../controllers/auth.controller");
const validate = require("../middlewares/validation.middleware");

//Validate es para que si se envio un campo vacio, mande la alerta que todos los campos son obligatorios.
router.post("/register", validate, register);

router.post("/login", validate, login);
module.exports = router;
