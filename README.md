<!--
*** Template adatpet from: https://github.com/othneildrew/Best-README-Template
***
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/flpnascto/movies-react">
    <img src="images/readme_logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">React Movies</h3>

  <p align="center">
    Site de exibição de informações básicas sobre filmes, obtidos a partir da API <a href="https://www.themoviedb.org/">TMDb</a>.
    <br />
    <a href="https://react-context-movies.herokuapp.com/">Demonstração</a>
    ·
    <a href="https://github.com/flpnascto/movies-react/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/flpnascto/movies-react/issues">Solicitar Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Tabela de Conteúdos</h2></summary>
  <ol>
    <li>
      <a href="#notebook_with_decorative_cover-sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#sparkles-funcionalidades">Funcionalidades</a></li>
        <li><a href="#computer-tecnologias-aplicadas">Tecnologias Aplicadas</a></li>
        <li><a href="#book-bibliotecas">Bibliotecas</a></li>
        <li><a href="#art-layout">Layout Base</a></li>
      </ul>
    </li>
    <li>
      <a href="#arrow_forward-executando-a-aplicação">Executando a aplicação</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#handshake-contribuição">Contribuição</a></li>
    <li><a href="#memo-licença">Licença</a></li>
    <li><a href="#email-contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## :notebook_with_decorative_cover: Sobre o Projeto
<p align="center">
<img src="images/screen_shot.png" alt="Logo" width="600" height="400">

React Movies é um software baseado em Web com o objetivo de trazer informações aos  usuários acerca de filmes. Nestas informações estão contidos o `Título`, `Gênero`, `Rating` e `Sinopse` do filme. Além disto pode conter o `Poster` e o `Trailer`.

Estas informações são obtidas através de requisições à API The Movie DB.

Este projeto foi desenvolvido para o desafio técnido da [Suno Research](https://www.suno.com.br/). Verifique a [documentação](./challenge_description.md).

### :sparkles: Funcionalidades
- Exibição de um carrossel com os filmes mais recentes
- Catálogo de filmes com exibição em lista ou coluna
- Página de detalhes do filme, com trailer (se existir)
- Filtrar catálogo de filmes por gênero
- Ordenação do catálogo de filmes por mais popular(default) ou melhor avaliação

### :computer: Tecnologias Aplicadas

* HTML5
* CSS3
* JavaScript
* React
* Context API

### :book: Bibliotecas

* React Slick (Carousel). [docs](https://react-slick.neostack.com/docs/get-started)

### :art: Layout
Layout base disponível no [Figma](https://www.figma.com/file/V1Qfp19RorvXZI1qshlLGL/Suno-Movies?node-id=0%3A1).

<!-- GETTING STARTED -->
## :arrow_forward: Executando a aplicação

Para executar a aplicação localmente siga as instruções abaixo.

Obs.: a aplicação se encontra em deploy no site [https://react-context-movies.herokuapp.com/](https://react-context-movies.herokuapp.com/). _Lembrando que devido a configuração **Hibernate** do Heroku, o primeiro acesso poderá levar um longo tempo_.

### Pré-requisitos

Primeiramente é necessário que possua instalado as seguintes ferramentas: gerenciador de pacotes NPM e o Git.
Além disto é bom ter um editor para trabalhar com o código como VSCode.

### Instalação

1. Faça uma cópia do repositório (HTTPS ou SSH)
   ```sh
   git clone https://github.com/flpnascto/movies-react.git
   ```

   ```sh
   git@github.com:flpnascto/movies-react.git
   ```

2. Acesse a pasta do repositório loca e instale os pacotes necessários

   ```sh
   npm install
   ```
3. Adicionar chave para acesso à API TMDb
     1. Crie uma conta no site [https://www.themoviedb.org/](https://www.themoviedb.org/)
     2. Acesse sua conta em **configurações**
     3. Acesse no menu esquerdo a seção **API**
     4. Copie a sua chave em **Chave da API (v3 auth)**
     5. Na raiz do repositório local crie um novo arquivo chamado `.env.local`
     6. Abra `.env.local` e adicione a linha, substituindo _<<api_key>>_ pela sua chave (3.4)

     ```
     REACT_APP_APIKEY=<<api_key>>
     ```

4. Na pasta do repositócio local execute o comando para iniciar a aplicação

   ```sh
   npm start
   ```

<!-- USAGE EXAMPLES -->
<!-- ROADMAP -->
<!-- CONTRIBUTING -->
## :handshake: Contribuição

As contribuições são o que tornam a comunidade open source um lugar incrível para aprender, inspirar e criar. Juntos vamos mais longe :rocket:.
Sinta-se a vontade para sugerir melhorias e compartilhar o conhecimento.

1. Fork o projeto
2. Crie sua _Feature Branch_ (`git checkout -b feature/AmazingFeature`)
3. _Commit_ suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. _Push_ para o repositório remoto (`git push origin feature/AmazingFeature`)
5. Abra um _Pull Request_

<!-- LICENSE -->
## :memo: Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<!-- CONTACT -->
## :email: Contato

[![Linkedin Badge](https://img.shields.io/badge/-Felipe_Nascimento-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/fnascto/)](https://www.linkedin.com/in/fnascto/) [![Gmail Badge](https://img.shields.io/badge/-flpnascto@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:flpnascto@gmail.com)](mailto:flpnascto@gmail.com)
[![GitHub Badge](https://img.shields.io/badge/-Profile-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/flpnascto)](https://github.com/flpnascto)

Project Link: [https://github.com/flpnascto/movies-react](https://github.com/flpnascto/movies-react)
