const express = require('express');

const router = express.Router();

const { login, register, myaccount } = require('../controllers/UserController');
const { prompt, getPrompt, getPromptResponse } = require('../controllers/PromptController');
const authMiddleware = require('../middleware/AuthMiddleware');


router.post('/login', login);

router.post('/register', register);

router.post('/myaccount', myaccount);

router.get('/prompt',authMiddleware, getPrompt);

router.post('/prompt',authMiddleware, prompt);

router.get('/prompt/:id',authMiddleware, getPromptResponse);

module.exports = router;