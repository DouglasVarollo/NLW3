<p align="center"><img src="./.github/logo.png" /></p>

<p align="center">Projeto desenvolvido na semana Next Level Week 3.0 da Rocketseat.</p>

- [Sobre o projeto](#Sobre-o-projeto)
- [Requisitos](#Requisitos)
- [Tecnologias](#Tecnologias)
- [Como executar o projeto](#Como-executar-o-projeto)
  - [Backend](#Backend)
  - [Web](#Web)

<p align="center"><img src="./.github/capa.png" /></p>

## Sobre o projeto

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/lang/en/) (Opcional)

## Tecnologias

- TypeScript
- Node.js
- ReactJS
- React Native (expo)

## Como executar o projeto

- Baixe ou faça um clone desse repositório

  - Para baixar [clique aqui](https://github.com/DouglasVarollo/NLW3/archive/main.zip)
  - Para clonar execute esse comando no seu terminal

    ```bash
    git clone https://github.com/DouglasVarollo/NLW3.git
    ```

  - Acesse a pasta NLW3

  ```bash
  cd NLW3
  ```

### Backend

Para executar a backend siga as instruções

- Acesse a pasta NLW3/backend

```bash
cd backend
```

- Instale as dependências

```bash
# com yarn
yarn

# com npm
npm install
```

_Obs: Caso use o npm, você precisa apagar o arquivo yarn.lock_

Antes de iniciar a aplicação você precisa rodar as migrations

```bash
# com yarn
yarn typeorm migration:run

# com npm
npm run typeorm migration:run
```

Também precisa editar o IP do arquivo **backend/src/views/images_view.ts** para o [IP interno do seu computador](https://tecnoblog.net/309657/como-descobrir-qual-e-o-meu-ip/).

- Inicie a aplicação

```bash
# com yarn
yarn dev

# com npm
npm run dev
```

A aplicação será executada em [http://localhost:3333](http://localhost:3333)

Para testar a API você pode usar um aplicativo chamado [Insomnia](https://insomnia.rest/) e importar o arquivo **Insomnia.json** que está na pasta **.github**. Também pode simplesmente clicar nesse botão abaixo

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=NLW%20%233&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDouglasVarollo%2FNLW3%2Fmaster%2F.github%2FInsomnia.json)

### Web

Para executar a aplicação web siga as instruções

- Acesse a pasta NLW3/web

```bash
cd web
```

- Instale as dependências

```bash
# com yarn
yarn

# com npm
npm install
```

_Obs: Caso use o npm, você precisa apagar o arquivo yarn.lock_

Antes de iniciar a aplicação você precisa criar um arquivo chamado **.env** dentro da pasta **web**, copie o conteúdo do arquivo **.env.example** e adicione o token da sua conta do [Mapbox](https://docs.mapbox.com/help/glossary/access-token).

- Inicie a aplicação

```bash
# com yarn
yarn start

# com npm
npm run start
```

A aplicação será executada em [http://localhost:3000](http://localhost:3000)
