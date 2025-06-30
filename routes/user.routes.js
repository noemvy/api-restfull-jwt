const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const { profile } = require('../controllers/user.controller');
router.get('/profile', auth, profile);
module.exports = router;