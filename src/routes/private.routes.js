const express = require('express');

const AuthController = require('../controllers/AuthController');

const router = express.Router();

// ==================
// Rotas Privadas
// (Usuários logados)
// ==================

// Renderiza a página restrita
router.get('/restrito', AuthController.renderAreaRestrita);

// Rota para fazer o logout do usuário
router.post('/logout', AuthController.logout);

module.exports = router;