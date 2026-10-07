# 🎓 Sistema Escolar

Projeto acadêmico desenvolvido em equipe durante as atividades da turma, com foco no aprendizado prático de desenvolvimento backend, criação de APIs REST, persistência de dados e integração com banco de dados.

O projeto foi construído de forma incremental, acompanhando a evolução dos conteúdos estudados em aula, desde a criação de um servidor Express até a utilização de Sequelize, SQLite e migrations.

## 📌 Sobre o projeto

O **Sistema Escolar** é uma aplicação desenvolvida para praticar conceitos de desenvolvimento de sistemas utilizando o ecossistema Node.js.

Durante a construção do projeto foram trabalhados conceitos como:

* criação de servidor HTTP;
* criação e organização de rotas;
* controllers;
* requisições GET, POST, PUT e DELETE;
* parâmetros de rota;
* manipulação de dados;
* CRUD;
* exclusão lógica (Soft Delete);
* integração com banco de dados;
* utilização de ORM;
* criação de Models;
* migrations;
* relacionamentos entre tabelas;
* versionamento e colaboração utilizando Git e GitHub.

> **Observação:** este é um projeto acadêmico desenvolvido colaborativamente pela turma. As funcionalidades apresentadas representam o resultado do trabalho coletivo, enquanto a seção abaixo destaca minha participação registrada no histórico do Git.

---

# 👨‍💻 Minha participação

Minha participação no projeto esteve principalmente relacionada ao desenvolvimento do **backend**, evolução da API e integração com banco de dados.

As contribuições registradas no histórico do Git incluem:

### 🔹 Express e servidor

Participação na construção da estrutura inicial utilizando **Node.js e Express**, incluindo configuração do servidor e criação das primeiras rotas.

### 🔹 Rotas e Controllers

Desenvolvimento e evolução das rotas e controllers responsáveis pelo gerenciamento de usuários.

Foram trabalhadas rotas como:

```http
GET /users
GET /users/:id
POST /users
PUT /users/:id
DELETE /users/:id
```

Também foram implementadas regras para localização de usuários por ID e tratamento de registros não encontrados.

### 🔹 CRUD de usuários

Participação na implementação das operações de:

* criação de usuários;
* listagem de usuários;
* consulta de usuário por ID;
* atualização de usuários;
* exclusão de usuários.

### 🔹 Soft Delete

Implementação do conceito de **Soft Delete**, evitando a remoção física do registro.

Nesse modelo, o usuário recebe uma indicação de exclusão e deixa de aparecer nas listagens, preservando os dados.

### 🔹 Sequelize e SQLite

Participação na migração da aplicação para utilização do **Sequelize** como ORM e **SQLite** como banco de dados.

Foi criado o primeiro Model utilizando Sequelize, além da configuração da conexão com o banco.

### 🔹 Migrations

Participação na criação e evolução das migrations utilizando **Sequelize CLI**.

Foram trabalhadas estruturas relacionadas a usuários, escolas e colaboradores, incluindo campos, chaves e relacionamentos entre tabelas.

### 🔹 Relacionamento entre entidades

Uma das etapas do projeto envolveu a criação da relação entre **colaboradores e escolas**, utilizando uma chave estrangeira:

```text
escolas
   │
   └── colaboradores
          └── escola_id
```

---

# 🛠️ Tecnologias utilizadas

| Tecnologia    | Utilização                |
| ------------- | ------------------------- |
| JavaScript    | Linguagem principal       |
| Node.js       | Ambiente de execução      |
| Express.js    | Criação do servidor e API |
| Sequelize     | ORM                       |
| SQLite        | Banco de dados            |
| Sequelize CLI | Migrations                |
| dotenv        | Variáveis de ambiente     |
| Nodemon       | Desenvolvimento           |
| Git           | Controle de versão        |
| GitHub        | Hospedagem e colaboração  |

---

# 📂 Estrutura do projeto

```text
sistema-escolar2/
│
├── aulas/
│   └── Conteúdos e exercícios desenvolvidos durante as aulas
│
├── src/
│   ├── config/
│   │
│   ├── controllers/
│   │
│   ├── migrations/
│   │
│   ├── routes/
│   │
│   └── models/
│
├── .gitignore
├── .sequelizerc
├── database.sqlite
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# 🚀 Como executar

## 1. Pré-requisitos

É necessário possuir instalado:

* Node.js
* npm
* Git

## 2. Clonar o projeto

```bash
git clone https://github.com/pedro2506/sistema-escolar2.git
```

Entrar na pasta:

```bash
cd sistema-escolar2
```

## 3. Instalar as dependências

```bash
npm install
```

## 4. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto.

Exemplo:

```env
SERVER_PORT=3000
```

## 5. Executar o projeto

```bash
npm run server
```

O comando utiliza o Nodemon para executar o servidor durante o desenvolvimento.

---

# 🗄️ Banco de dados

O projeto utiliza **SQLite** como banco de dados e **Sequelize** como ORM.

A conexão com o banco é realizada através do Sequelize, permitindo trabalhar com as entidades da aplicação utilizando JavaScript.

O projeto também utiliza **migrations**, permitindo criar e alterar a estrutura do banco de maneira controlada.

---

# 🔄 Migrations

O projeto possui scripts para gerenciamento das migrations:

```bash
npm run migration:create
```

Executar migrations:

```bash
npm run migrate
```

Desfazer a última migration:

```bash
npm run migrate:undo
```

---

# 🔌 API

Entre as rotas trabalhadas no projeto estão:

### Listar usuários

```http
GET /users
```

### Buscar usuário por ID

```http
GET /users/:id
```

### Criar usuário

```http
POST /users
```

Exemplo:

```json
{
  "name": "João",
  "email": "joao@email.com"
}
```

### Atualizar usuário

```http
PUT /users/:id
```

### Excluir usuário

```http
DELETE /users/:id
```

O projeto também possui uma rota utilizada para verificar a comunicação com o banco:

```http
GET /test-db
```

Essa rota realiza a autenticação com o SQLite e consulta as tabelas existentes no banco.

---

# 🧪 Testando a API

As requisições podem ser testadas utilizando ferramentas como:

* Postman
* Insomnia
* Thunder Client
* REST Client do VS Code

Exemplo:

```http
GET http://localhost:3000/users
```

---

# 📚 Principais aprendizados

O desenvolvimento deste projeto permitiu praticar conceitos importantes do desenvolvimento backend:

* construção de APIs REST;
* Node.js;
* Express.js;
* organização de controllers e routes;
* operações CRUD;
* parâmetros de URL;
* tratamento de respostas HTTP;
* Soft Delete;
* ORM;
* Sequelize;
* SQLite;
* Models;
* migrations;
* chaves estrangeiras;
* relacionamento entre entidades;
* variáveis de ambiente;
* Git e GitHub;
* desenvolvimento colaborativo.

---

# 👥 Desenvolvimento colaborativo

Este projeto foi desenvolvido **em equipe durante as atividades da turma**.

O GitHub foi utilizado para versionamento do código e acompanhamento da evolução do projeto.

O histórico de commits permite acompanhar as diferentes etapas do desenvolvimento e as contribuições realizadas pelos integrantes.

---

# 🌐 Demonstração

O projeto possui uma página publicada através do GitHub Pages:

**https://pedro2506.github.io/sistema-escolar2/**

---

# 📌 Status

🚧 Projeto acadêmico desenvolvido durante o processo de aprendizagem.

O código representa a evolução do projeto ao longo das aulas e serve também como registro prático dos conhecimentos adquiridos em desenvolvimento backend.

---

# 👨‍💻 Autor

**Pedro Miranda**

GitHub:
https://github.com/pedro2506

Projeto desenvolvido em equipe durante as atividades acadêmicas.
