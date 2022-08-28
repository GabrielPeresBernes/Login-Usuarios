const express = require('express');
const session = require('express-session');

const privateRoutes = require('./src/routes/private.routes');
const publicRoutes = require('./src/routes/public.routes');

const userIsAuthenticated = require('./src/middlewares/userIsAuthenticated');

// Inicialização do express
const server = express();

// define o ejs como view engine
server.set('view engine', 'ejs');

// define o diretório de views
server.set('views', './src/views');

// define o diretório de arquivos estáticos (public)
server.use(express.static(__dirname + '/public'));

// permite o uso de req.body
server.use(express.urlencoded({extended: false}));

// Define o uso de sessões
server.use(session({
    secret: 'asd7394asdjs83_asd&&ad#f@50gmdualg89674ahfpa',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false
    }
  }));

// Rotas públicas
server.use('/', publicRoutes);

// Utiliza o middleware userIsAuthenticated para verificar se o usuário está logado
// O middleware será executado para todas as rotas abaixo
server.use(userIsAuthenticated);

// Rotas privadas
server.use('/', privateRoutes);

// inicialização do servidor
server.listen(3000, () => {
    console.log('Servidor inicializado na porta 3000');
});