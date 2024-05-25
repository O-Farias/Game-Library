# Biblioteca de Jogos

Uma aplicação simples de biblioteca de jogos feita com React e Vite, que permite adicionar e remover jogos da biblioteca. A aplicação também possui suporte para temas claro e escuro.

## Funcionalidades

- Adicionar jogos com título e URL da capa
- Remover jogos da biblioteca
- Alternar entre temas claro e escuro
- Persistência de dados utilizando `localStorage`

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

## Como Rodar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Passos

1. Clone o repositório:

   ```sh
   git clone https://github.com/O-Farias/Game-Library.git
   cd biblioteca-de-jogos
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Rode a aplicação:

   ```sh
   npm run dev
   ```

4. Abra seu navegador e acesse:

   ```sh
   http://localhost:3000
   ```

## Customização

### Alterar Tema

Para alternar entre temas claro e escuro, clique no botão `Alternar para tema claro/escuro` no topo da aplicação.

### Adicionar Jogos

1. Preencha o campo `Título` com o nome do jogo.
2. Preencha o campo `Capa` com a URL da imagem da capa do jogo.
3. Clique no botão `Adicionar`.

### Remover Jogos

Clique no botão `Remover` abaixo do jogo que deseja remover da biblioteca.
