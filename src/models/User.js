const fs = require('fs');
const {v4} = require('uuid');

// Lê o arquivo db.json e converte o conteúdo em objeto
const db = require('../database/db.json');

// Escreve os dados em memória no arquivo db.json
const writeToDB = () => {
  // Converte o objeto db em string
  const json = JSON.stringify(db);
  // Escreve a string no arquivo db.json
  fs.writeFileSync('src/database/db.json', json);
}

const User = {
  // Retorna um usuário pelo email
  findByEmail: (email) => {
    // Busca o usuário que tiver o email informado
    const user = db.users.find(user => user.email === email);
    // Retorna o usuário encontrado
    return user;
  },

  // Cria um novo usuário
  create: (user) => {
    // Gera um id único para o usuário e adiciona ao db em memória
    db.users.push({ id: v4(), ...user });
    // Escreve os dados em memória no arquivo db.json
    writeToDB();
  },
}

module.exports = User;