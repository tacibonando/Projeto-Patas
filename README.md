# Projeto Patas 🐾

## Sobre o projeto

O **Projeto Patas** é uma aplicação web desenvolvida para representar uma ONG fictícia voltada à proteção e adoção de animais.

O projeto foi desenvolvido como atividade acadêmica do curso de **Análise e Desenvolvimento de Sistemas (ADS)**, com o objetivo de aplicar conhecimentos de desenvolvimento web, organização de código, responsividade, JavaScript e controle de versões.

A aplicação apresenta informações sobre a organização, animais disponíveis para adoção e formas de contribuir com o projeto.

---

## Objetivos

* Desenvolver uma interface web moderna e responsiva.
* Apresentar animais disponíveis para adoção.
* Criar uma navegação organizada entre as diferentes seções da aplicação.
* Aplicar conceitos de HTML, CSS e JavaScript.
* Utilizar manipulação do DOM para criar comportamentos dinâmicos.
* Praticar organização de arquivos e controle de versões com Git e GitHub.
* Aplicar o modelo de ramificação GitFlow durante o desenvolvimento.

---

## Tecnologias utilizadas

### HTML5

Utilizado para estruturar o conteúdo da aplicação, utilizando elementos semânticos e formulários.

### CSS3

Utilizado para desenvolver a identidade visual, layout, responsividade e estados dos elementos da interface.

Foram utilizados recursos como:

* CSS Grid
* Flexbox
* Media Queries
* Variáveis CSS
* Pseudo-elementos
* Estados de interação dos botões e campos

### JavaScript

Utilizado para adicionar interatividade e comportamentos dinâmicos à aplicação.

Entre os recursos utilizados estão:

* DOM
* Event Listeners
* Funções
* Template Literals
* Arrays e métodos de array
* Manipulação de elementos HTML
* `localStorage`
* `JSON.stringify()`
* `JSON.parse()`

### Git e GitHub

Utilizados para controle de versão, organização do desenvolvimento e aplicação do fluxo GitFlow.

Foram utilizadas branches como:

* `master`
* `develop`
* `feature/*`
* `hotfix/*`

Também foram utilizados **Conventional Commits**, Pull Requests, Issues e Milestones.

---

## Funcionalidades

O Projeto Patas possui as seguintes funcionalidades:

* Navegação entre as principais seções da aplicação.
* Apresentação das informações da ONG.
* Galeria de animais disponíveis para adoção.
* Criação dinâmica dos cards dos animais utilizando JavaScript.
* Formulário para cadastro.
* Validação de campos do formulário.
* Armazenamento de informações utilizando `localStorage`.
* Feedback visual após determinadas ações do utilizador.
* Mensagem de confirmação para a ação de doação.
* Toast de feedback para a ação de ajuda.
* Layout responsivo para diferentes tamanhos de tela.

---

## Estrutura do projeto

```text
Projeto-Patas/
│
├── css/
│   └── main.css
│
├── fonts/
│   └── ...
│
├── imagens/
│   ├── hero-gato.webp
│   ├── animal1.webp
│   ├── animal2.webp
│   ├── animal3.webp
│   └── animal4.webp
│
├── js/
│   └── app.js
│
├── cadastro.html
├── index.html
└── README.md
```

A estrutura separa os arquivos de estilo, scripts, fontes e imagens, facilitando a organização e manutenção do projeto.

---

## Como executar o projeto

O projeto não utiliza frameworks ou dependências externas para sua execução atual.

Para executar localmente:

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto no **Visual Studio Code**.
3. Abra o arquivo `index.html` no navegador.

Também é possível utilizar uma extensão como o **Live Server** no Visual Studio Code para executar o projeto durante o desenvolvimento.

---

## Responsividade

A interface foi desenvolvida considerando diferentes tamanhos de tela, utilizando **CSS Grid**, **Flexbox** e **Media Queries**.

O layout adapta a disposição dos elementos conforme a largura disponível, buscando manter a navegação, imagens, textos e botões acessíveis em dispositivos desktop, tablet e mobile.

---

## GitFlow

O desenvolvimento do projeto utilizou uma estrutura baseada no modelo **GitFlow**, separando o desenvolvimento contínuo das funcionalidades e das correções.

### Branches utilizadas

* `master`: representa a versão estável do projeto.
* `develop`: concentra as alterações em desenvolvimento.
* `feature/*`: utilizada para desenvolver novas funcionalidades.
* `hotfix/*`: utilizada para correções que precisam ser aplicadas à versão estável.

### Fluxo utilizado

```text
master
   │
   ├── hotfix/*
   │
   ↓
develop
   │
   ├── feature/*
   │
   ↓
develop
```

As funcionalidades foram desenvolvidas em branches próprias e posteriormente integradas à `develop`. As correções urgentes foram desenvolvidas em branches `hotfix/*`, integradas à `master` e posteriormente à `develop`.

---

## Versionamento e commits

Durante o desenvolvimento foram utilizados **Conventional Commits** para manter as mensagens de commit padronizadas e facilitar a compreensão do histórico do projeto.

Exemplos utilizados:

```text
feat: melhorar mensagem de doacao
feat: melhorar feedback da doacao
fix: ajustar duração do toast
fix: ajustar tempo do toast
```

Os prefixos utilizados indicam o tipo de alteração realizada:

* `feat:` — nova funcionalidade ou melhoria funcional.
* `fix:` — correção de um problema existente.

---

## Issues, Milestones e Pull Requests

O GitHub foi utilizado para organizar e acompanhar as atividades do projeto.

### Issue

Foi criada uma Issue para registrar a necessidade de melhorar o feedback apresentado ao utilizador após a ação de doação.

### Milestone

Foi criado o Milestone **"GitFlow e melhorias do projeto"** para agrupar e acompanhar as atividades relacionadas à implementação do GitFlow e às melhorias realizadas durante a etapa.

### Pull Request

Foi utilizado um Pull Request para propor a integração da branch `feature/feedback-doacao` à branch `develop`.

O Pull Request registrou as alterações realizadas na funcionalidade de feedback da doação e foi posteriormente integrado à `develop`.

---

## Contexto acadêmico

Projeto desenvolvido como parte das atividades práticas do curso de **Análise e Desenvolvimento de Sistemas (ADS)**, com foco na aplicação dos conhecimentos de desenvolvimento web, JavaScript, responsividade e controle de versões.

---

## Autoria

Projeto desenvolvido para fins acadêmicos.

**Projeto Patas — 2026**
