<div align="center">
  <h1>📚 BookShop - E-commerce de Livros Digitais</h1>
</div>

<p align="center">
  <img src="Logo BookShop React.png" alt="Logo BookShop" width="300">
</p>

Bem-vindo ao **BookShop**, um e-commerce desenvolvido para a compra e venda de livros digitais, criado como parte do Projeto Final da disciplina de **Desenvolvimento Web** para a **Residência de TIC/Software 2024.2** do Serratec.

![GitHub repo size](https://img.shields.io/github/repo-size/badges/shields?style=plastic)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-blue?style=plastic)

## 🎓 **Sobre o Projeto**

Este projeto foi desenvolvido como parte da conclusão do curso de Desenvolvimento Web, sob orientação da professora **Maria Clara Ribeiro**. O **BookShop** oferece uma plataforma intuitiva para a compra de livros digitais, utilizando tecnologias modernas de front-end e uma estrutura leve para aplicações web.

## 👥 **Integrantes do Projeto**

- [Samuel Teldison](https://www.linkedin.com/in/samuel-teldison-serafim-silva-de-oliveira-89939a1a3/)
- [Caio Pacheco](https://www.linkedin.com/in/caio-pacheco-8919ba22b/)
- [Vinicius Ramos](https://www.linkedin.com/in/vin%C3%ADcius-ramos-pimenta-639955261/)
- [Rafael Januzzi](https://www.linkedin.com/in/rafael-januzzi-52719416b/)
- [Rafael Guberman](https://www.linkedin.com/in/rafael-guberman-2486a1ba/)
- [Vitor Ferreira](https://www.linkedin.com/in/rafael-guberman-2486a1ba/)

## 🛠️ **Tecnologias Utilizadas**

- **HTML** para a estruturação das páginas.
- **CSS** para o estilo e layout responsivo.
- **JavaScript** e **React** para criar uma interface dinâmica e interativa.
- **Visual Studio Code** como editor principal para desenvolvimento.
- **React Router** para navegação entre páginas.
- **Context API** para gerenciamento global de estado.

## 🚀 **Funcionalidades Implementadas**

- 🛒 **Carrinho de Compras**: Sistema de gerenciamento de itens adicionados ao carrinho utilizando Context API. Exibe o número total de itens e o valor total da compra.
- 🔒 **Autenticação de Usuário**: Formulário de login para agentes cadastrados, com validação de campos obrigatórios (e-mail com “@” e senha não vazia). Inclui opção de log-out para encerrar a sessão de maneira segura.
- 📝 **Cadastro de Usuários**: Formulário de cadastro de novos usuários com validação de campos (nome, e-mail, CPF, telefone, endereço, senha e confirmação de senha). Valida CPF, e-mail e confirmações de senha.
- 🏷️ **Exibição de Produtos**: Apresentação de produtos com imagem, nome, descrição breve e preço, além de um botão para adicionar os itens ao carrinho.
- 🌐 **Navegação com React Router**: Implementação do sistema de navegação entre as páginas principais do e-commerce.

## 📚 **Regras de Negócio**

- **Autenticação**: Somente usuários cadastrados poderão realizar o login. Campos de e-mail e senha são obrigatórios, com validações de formato de e-mail e senha não vazia.
- **Cadastro**: O cadastro de novos usuários exige a validação de CPF (11 dígitos), e-mail válido, senha e confirmação de senha correspondentes.
- **Carrinho de Compras**: Itens no carrinho são atualizados globalmente e exibem o total de itens e o valor total da compra.
- **Produto**: Cada produto possui detalhes como imagem, nome, descrição e preço. O botão de adição ao carrinho é essencial para gerenciar as compras.

## ✅ **Checklist do Projeto**

- [x] Implementação de formulário de autenticação para usuários cadastrados
- [x] Validações de campos obrigatórios e lógicas de cadastro de usuário
- [x] Gerenciamento de estado global com Context API para carrinho de compras
- [x] Exibição de produtos organizados visualmente e com detalhes completos
- [x] Navegação entre páginas com React Router
- [x] Implementação de componentes React funcionais divididos por pastas específicas
