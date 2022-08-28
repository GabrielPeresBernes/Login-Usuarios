const express = require('express');

const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

// ======================
// Rotas Públicas
// (Usuários não logados)
// ======================

// Renderiza a página inicial de login
// Utiliza o middleware redirectAuthenticatedUser para redirecionar o usuário logado
router.get('/', AuthController.renderLogin);

// Renderiza a página de cadastro de usuário
// Utiliza o middleware redirectAuthenticatedUser para redirecionar o usuário logado
router.get('/sign-up', UserController.renderFormCadastro);

// Rota para fazer o login do usuário
router.post('/login', AuthController.login);

// Rota para cadastrar um novo usuário
router.post('/cadastro', UserController.create);

module.exports = router;