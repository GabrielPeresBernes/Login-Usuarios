// ========================================================
// Controller responsável por gerenciar os dados do usuário
// (Ex: cadastro, atualização, exclusão)
// ========================================================

const bcrypt = require('bcrypt');

const User = require('../models/User');

const saltRounds = 10;

const UserController = {
  create: (req, res) => {
    console.log(req.body);
    // Pega os dados do usuário do corpo da requisição
    const { email, senha } = req.body;

    // Faz a criptografia da senha
    const hash = bcrypt.hashSync(senha, saltRounds);
    
    // Chama a model para criar um novo usuário
    // Passando o email e a senha criptografada
    User.create({ email, senha: hash });
    
    // Redireciona para a página de login
    res.redirect('/');
  },

  renderFormCadastro: (req, res) => {
    // Verifica se o usuário está logado
    // Ou seja, se existe uma sessão para o usuário
    if (req.session.user != undefined) {
      // Se estiver logado, redireciona para a página restrita
      return res.redirect('/restrito');
    }
    
    // Renderiza a página de cadastro de usuário
    return res.render('formCadastro');
  }
}

module.exports = UserController;