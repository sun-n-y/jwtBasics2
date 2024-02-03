const express = require('express');
const { login, dashboard } = require('../controllers/main');
const authenticationMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/dashboard', authenticationMiddleware, dashboard);
router.post('/login', login);

module.exports = router;
