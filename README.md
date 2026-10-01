# Projeto_ONG

Projeto de experiência prática desenvolvido para uma ONG fictícia, com o objetivo de aplicar conhecimentos de HTML5, CSS3 e JavaScript na criação de uma aplicação web organizada, funcional e acessível.

## Sobre o projeto

A aplicação apresenta páginas para divulgação de projetos da ONG e disponibiliza um formulário para cadastro de interesse em ações de doação e voluntariado.

O projeto utiliza JavaScript para controlar a navegação, o comportamento do formulário e o armazenamento de informações no navegador.

## Tecnologias utilizadas

- HTML5: estrutura e semântica das páginas.
- CSS3: estilização, layout e responsividade da interface.
- JavaScript: interatividade, navegação e controle do formulário.
- LocalStorage: armazenamento e recuperação de dados no navegador.
- Git: controle de versão do código.
- GitHub: hospedagem do repositório e gerenciamento do desenvolvimento.

## Estrutura do projeto

O projeto está organizado nas seguintes pastas:

- `html/`: páginas HTML da aplicação.
- `css/`: arquivo de estilos.
- `js/`: scripts JavaScript separados por responsabilidades.
- `imagens/`: imagens utilizadas no projeto.

## Pré-requisitos

Para executar o projeto localmente, são necessários:

- um navegador web atualizado;
- um editor de código, como o Visual Studio Code;
- Git, caso seja necessário clonar o repositório.

Não são necessárias bibliotecas externas ou gerenciadores de pacotes.

## Instalação e execução local

1. Clone o repositório:

   `git clone https://github.com/vanessa-ads/Projeto_ONG.git`

2. Acesse a pasta do projeto:

   `cd Projeto_ONG`

3. Abra a pasta do projeto no editor de código.

4. Execute a aplicação abrindo o arquivo:

   `html/index.html`

A aplicação pode ser executada diretamente no navegador, pois não possui dependências externas que exijam instalação.

## Build

O projeto não possui uma etapa de build ou compilação, pois utiliza diretamente HTML, CSS e JavaScript.

## Testes

Foram realizados testes manuais para verificar:

- navegação entre as páginas;
- funcionamento do formulário;
- opções de doação e voluntariado;
- armazenamento e recuperação de dados com LocalStorage;
- navegação e comportamento do menu;
- comportamento do menu em diferentes larguras de tela;
- atualização do estado de acessibilidade do menu.

## Acessibilidade

O menu de navegação recebeu melhorias de acessibilidade com:

- botão HTML nativo;
- `aria-label`;
- `aria-expanded`;
- `aria-controls`;
- controle de abertura e fechamento por JavaScript.

## Versionamento

O projeto utiliza Git e GitHub para controle de versões.

Foi adotada uma organização baseada nas branches:

- `main`: versão estável;
- `develop`: desenvolvimento;
- branches específicas para funcionalidades ou alterações.

As mensagens de commit seguem o padrão Conventional Commits, utilizando tipos como `feat`, `chore` e `docs`.

Issues e Milestones são utilizados para organizar as atividades, enquanto Pull Requests registram a integração das alterações entre branches.

A primeira versão estável do projeto é identificada pela tag `v1.0.0`.