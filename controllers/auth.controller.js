const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
exports.register = async (req, res) => {
  const { username, password, full_name } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashed, full_name });
  res.status(201).json(user);
};
exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: 'Credenciales inválidas' });
  const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET);
  res.json({ token });
};