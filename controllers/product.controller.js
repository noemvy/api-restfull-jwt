const Product = require('../models/Product');
exports.create = async (req, res) => {
  req.body.created_by = req.user.id;
  res.json(await Product.create(req.body));
};
exports.list = async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category_id: category } : {};
  res.json(await Product.find(filter).populate('category_id created_by'));
};
exports.detail = async (req, res) => res.json(await Product.findById(req.params.id));
exports.update = async (req, res) => res.json(await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.delete = async (req, res) => res.json(await Product.findByIdAndDelete(req.params.id));
