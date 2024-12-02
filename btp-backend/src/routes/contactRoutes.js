const express = require('express');
const router = express.Router();
const { saveContactMessage } = require('../controllers/contactController');

// Route POST pour enregistrer un message de contact
router.post('/', saveContactMessage);

module.exports = router;
