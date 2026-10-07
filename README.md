# 🎓 Sistema Escolar

Sistema desenvolvido como projeto acadêmico em equipe durante as atividades da turma, com o objetivo de praticar conceitos de desenvolvimento de aplicações web, APIs REST, banco de dados e organização de código utilizando Node.js.

## 📌 Sobre o projeto

O **Sistema Escolar** é uma aplicação desenvolvida para fins educacionais, utilizando uma arquitetura baseada em servidor Node.js, API REST e banco de dados SQLite.

O projeto foi desenvolvido colaborativamente pelos alunos da turma, permitindo colocar em prática conceitos estudados durante as aulas, como criação de rotas, manipulação de dados, persistência em banco de dados e utilização de ferramentas do ecossistema JavaScript.

## 🚀 Tecnologias utilizadas

* **Node.js** — ambiente de execução
* **Express.js** — criação e gerenciamento da API
* **Sequelize** — ORM para comunicação com o banco de dados
* **SQLite** — banco de dados
* **JavaScript** — linguagem principal
* **dotenv** — gerenciamento de variáveis de ambiente
* **Sequelize CLI** — gerenciamento de migrations
* **Nodemon** — reinicialização automática do servidor durante o desenvolvimento
* **Git e GitHub** — versionamento e colaboração

## 🗂️ Estrutura do projeto

```text
sistema-escolar2/
│
├── aulas/
│   └── Conteúdos e atividades desenvolvidos durante as aulas
│
├── src/
│   └── Código-fonte da aplicação
│
├── .gitignore
├── .sequelizerc
├── database.sqlite
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## ⚙️ Como executar o projeto

### 1. Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js
* npm
* Git

### 2. Clonar o repositório

```bash
git clone https://github.com/pedro2506/sistema-escolar2.git
```

Entre na pasta do projeto:

```bash
cd sistema-escolar2
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o servidor

```bash
npm run server
```

O projeto utiliza o Nodemon para facilitar o desenvolvimento e reiniciar automaticamente o servidor quando houver alterações nos arquivos.

## 🗄️ Banco de dados

O projeto utiliza **SQLite** como banco de dados e **Sequelize** como ORM.

O Sequelize permite trabalhar com o banco utilizando JavaScript, facilitando operações de criação, consulta, alteração e exclusão de registros.

O projeto também possui configuração para utilização de migrations através do Sequelize CLI.

## 🔌 API

A aplicação possui um servidor desenvolvido com Express.js para disponibilizar as rotas da aplicação.

Também existe uma rota de teste para verificar a comunicação com o banco de dados:

```http
GET /test-db
```

Essa rota realiza uma autenticação com o banco SQLite e retorna as tabelas existentes quando a conexão é realizada corretamente.

## 🧪 Testes da API

As requisições da API podem ser testadas utilizando ferramentas como:

* Postman
* Insomnia
* Thunder Client
* Extensões REST para VS Code

Exemplo:

```http
GET http://localhost:3000/test-db
```

> A porta utilizada pode ser configurada através da variável `SERVER_PORT`.

## 📚 Objetivos de aprendizagem

Durante o desenvolvimento do projeto foram praticados conceitos como:

* Criação de APIs REST
* Desenvolvimento com Node.js
* Utilização do framework Express
* Operações com banco de dados
* ORM com Sequelize
* Banco de dados SQLite
* Rotas e requisições HTTP
* Variáveis de ambiente
* Migrations
* Versionamento com Git
* Trabalho colaborativo utilizando GitHub

## 👥 Desenvolvimento em equipe

Este projeto foi desenvolvido **em equipe durante as atividades da turma**, como parte do processo de aprendizagem.

A experiência proporcionou contato com desenvolvimento colaborativo, versionamento de código e organização de um projeto utilizando Git e GitHub.

## 👨‍💻 Participação

Este repositório também faz parte do meu portfólio de aprendizado em desenvolvimento de sistemas.

Minha participação no projeto esteve relacionada às atividades realizadas durante as aulas, contribuindo para o desenvolvimento e aprendizado das tecnologias utilizadas.

> As funcionalidades e alterações foram desenvolvidas de forma colaborativa entre os integrantes da turma.

## 🌐 Demonstração

A aplicação possui uma página publicada através do GitHub Pages:

**https://pedro2506.github.io/sistema-escolar2/**

## 📈 Aprendizados

O desenvolvimento deste projeto contribuiu para consolidar conhecimentos em desenvolvimento backend, APIs, bancos de dados e utilização do GitHub como ferramenta de versionamento e colaboração.

Também serviu como experiência prática na organização de um projeto utilizando tecnologias presentes no ecossistema Node.js.

## 📄 Licença

Projeto desenvolvido para fins acadêmicos e educacionais.
