# Login de Usuários

## Como executar o projeto

1. Clone o repositório
2. Instale as dependências
```bash
npm install
```
3. Execute o servidor
```bash
npm start
# ou
nodemon server.js
# ou
node server.js
```
4. Acesse as rotas pela porta 3000
`localhost:3000`

## Estrutura do projeto
#### views
- areaRestrita: Página que só deve ser acesada se o usuário estiver logado;
- formCadastro: Página com formulário para o usuário criar uma nova conta;
- login: Página inicial, onde o usuário realiza o login.

#### routes
- privateRoutes: Rotas privadas que só podem ser acessadas se o usuário estiver logado;
- publicRoutes: Rotas públicas que podem ser acessadas por usuários não logados.

#### models
- User: Model com métodos para manipular um usuário no banco de dados.
  - findByEmail: Retorna um usuário dado um email passado como parámetro;
  - create: Cria um novo usuário no banco de dados com um id único.

#### middlewares
- userIsAuthenticated: Middleware para verificar se um usuário está logado, se o usuário estiver logado prosegue com a execussão normal (chama o Controller), caso contrário redireciona para a tela de login.

#### database
- db.json: Arquivo JSON que funciona como um banco de dados, armazenando os dados dos usuários.

#### controllers
- AuthController: Controller responsável por gerenciar a sessão do usuário.
  - login: Efetua o login do usuário, criando uma nova sessão com o email e id do usuário;
  - logout: Efetua o logout do usuário, destruindo a sessão;
  - renderLogin: Renderiza a página de login;
  - renderAreaRestrita: Renderiza a página de área restrita.
- UserController: Controller responável por gerenciar os dados do usuário
  - create: Cria um novo usuário, fazendo o hash da senha;
  - renderFormCadastro: Renderiza a página de cadastro de usuário.