const express = require('express');
const router = express.Router();
const professional = require('../controllers/professional');

router.get('/', professional.getData);

module.exports = router;
