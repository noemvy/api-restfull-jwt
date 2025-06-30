const Category = require('../models/Category');
exports.create = async (req, res) => {
req.body.created_by = req.user.id;
res.json(await Category.create(req.body));
};
exports.list = async (req, res) => res.json(await Category.find());
exports.update = async (req, res) => res.json(await Category.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.delete = async (req, res) => res.json(await Category.findByIdAndDelete(req.params.id));
