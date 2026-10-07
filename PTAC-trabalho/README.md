# Painel de Ideias

Aplicação web desenvolvida em React para organizar ideias de forma simples e prática. O usuário pode adicionar novas ideias, marcar ideias como concluídas e remover aquelas que não deseja mais manter no painel.

## Sobre o projeto

O Painel de Ideias foi desenvolvido utilizando React e Vite.

A aplicação possui uma interface simples e responsiva, permitindo que o usuário gerencie uma lista de ideias diretamente pela tela.

As ideias são armazenadas no estado da aplicação utilizando o `useState` do React.

## Funcionalidades

- Adicionar novas ideias
- Marcar ideias como concluídas
- Desmarcar ideias concluídas
- Remover ideias
- Exibir mensagem de erro quando o campo está vazio
- Exibir a quantidade total de ideias
- Exibir a quantidade de ideias concluídas
- Interface responsiva para dispositivos menores

## Tecnologias utilizadas

- React 19
- React DOM
- Vite
- JavaScript
- CSS3
- ESLint

## Interface

A aplicação possui um painel centralizado com:

- Título "Painel de Ideias"
- Campo para inserir uma nova ideia
- Botão para adicionar a ideia
- Lista de ideias cadastradas
- Checkbox para marcar uma ideia como concluída
- Botão para remover uma ideia
- Contador de ideias e ideias concluídas

Quando uma ideia é concluída, o texto recebe um efeito de tachado para indicar visualmente seu status.

A interface também possui comportamento responsivo para telas menores.

## Estrutura do projeto

```text
ptac-trabalho/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── ...
├── package.json
├── package-lock.json
└── README.md