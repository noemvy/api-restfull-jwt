const Review = require('../models/Review');
exports.create = async (req, res) => {
  req.body.user_id = req.user.id;
  res.json(await Review.create(req.body));
};
exports.listByProduct = async (req, res) => {
  const reviews = await Review.find({ product_id: req.params.id });
  res.json(reviews);
};
exports.update = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review.user_id.toString() !== req.user.id) return res.status(403).json({ message: 'No autorizado' });
  res.json(await Review.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};
exports.delete = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review.user_id.toString() !== req.user.id) return res.status(403).json({ message: 'No autorizado' });
  res.json(await Review.findByIdAndDelete(req.params.id));
};
