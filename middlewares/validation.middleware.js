
//ARCHIVO PARA VALIDAR QUE TODOS LOS CAMPOS ESTEN LLENOS
module.exports = (req, res, next) => {
  const body = req.body;

  // Verifica si algún campo está vacío, nulo o no está definido
  const hasEmptyField = Object.values(body).some(
    v => v === '' || v === undefined || v === null
  );

  if (hasEmptyField) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  next();
};
