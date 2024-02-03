const express = require('express');
const { login, dashboard } = require('../controllers/main');

const router = express.Router();

router.get('/dashboard', dashboard);
router.post('/login', login);

module.exports = router;
