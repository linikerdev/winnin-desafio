# Winnin Desafio

Este repositório contém o projeto desenvolvido para o desafio da Winnin.

### Estrutura do Projeto

- `/src`: Código fonte do projeto
  - `/components`: Componentes reutilizáveis da aplicação
    - `/atoms`: Componentes básicos e independentes
    - `/molecules`: Componentes compostos por múltiplos átomos
    - `/templates`: Layouts de página
  - `/interfaces`: Definições de tipos e interfaces TypeScript
  - `/services`: Configurações e serviços de API
  - `/state`: Gerenciamento de estado com Redux
  - `/style`: Estilos globais e temas
  - `/tests`: Testes automatizados

### Como Executar

1. Clone o repositório:
  ```sh
  git clone https://github.com/seu-usuario/winnin-desafio.git
  ```
2. Navegue até o diretório do projeto:
  ```sh
  cd winnin-desafio
  ```
3. Instale as dependências:
  ```sh
  npm install
  ```
4. Inicie o servidor de desenvolvimento:
  ```sh
  npm run dev
  ```

  Os arquivos de build serão gerados na pasta `dist`.

### Funcionalidades

  - **Pesquisa de Animes**: Permite pesquisar animes por título.
  - **Filtragem por Formato**: Permite filtrar animes por formato (Manga, Novel, etc.).
  - **Atualização de Formato**: Permite atualizar o formato de um anime específico.
  - **Tema Claro/Escuro**: Suporte a temas claro e escuro.

### Bibliotecas Utilizadas

  - **React**: Biblioteca para construção de interfaces de usuário.
  - **Redux**: Gerenciamento de estado da aplicação.
  - **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
  - **Axios**: Cliente HTTP para realizar requisições à API.
  - **Styled-Components**: Biblioteca para estilização de componentes.
  - **Jest**: Framework de testes para JavaScript.
  - **React Testing Library**: Utilitários para testes de componentes React.

### Padrões de Projeto

  - **Atomic Design**: Organização dos componentes em átomos, moléculas e templates.
  - **Ducks Pattern**: Estruturação dos módulos Redux para melhor organização.
  - **Component-Based Architecture**: Desenvolvimento baseado em componentes reutilizáveis.
  - **RESTful API**: Comunicação com a API seguindo os princípios REST.
  - **Theming**: Suporte a múltiplos temas (claro e escuro) utilizando styled-components.

### Autor

- **Nome**: Liniker Silva
- **Email**: contato@liniker.com.br