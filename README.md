# Projeto_ONG

Projeto de experiência prática desenvolvido para uma ONG fictícia, com o objetivo de aplicar conhecimentos de HTML5, CSS3 e JavaScript na criação de uma aplicação web organizada, funcional e acessível.

## Sobre o projeto

A aplicação apresenta páginas para divulgação de projetos da ONG e disponibiliza um formulário para cadastro de interesse em ações de doação e voluntariado.

O projeto utiliza JavaScript para controlar a navegação, o comportamento do formulário e o armazenamento de informações no navegador.

Além da implementação das funcionalidades, o projeto foi preparado para produção, com otimização de arquivos, minificação de HTML, CSS e JavaScript e publicação por meio do GitHub Pages.

## Tecnologias utilizadas

- HTML5: estrutura e semântica das páginas.
- CSS3: estilização, layout e responsividade da interface.
- JavaScript: interatividade, navegação e controle do formulário.
- LocalStorage: armazenamento e recuperação de dados no navegador.
- Node.js e npm: gerenciamento das ferramentas e dependências utilizadas no processo de build.
- Vite: ferramenta de build e bundler utilizada para gerar os arquivos de produção.
- html-minifier-terser: minificação dos arquivos HTML durante o build.
- Sharp: otimização das imagens utilizadas na aplicação.
- Git: controle de versão do código.
- GitHub: hospedagem do repositório e gerenciamento do desenvolvimento.
- GitHub Actions: automação do processo de build e deploy.
- GitHub Pages: publicação da aplicação em produção.

## Estrutura do projeto

O projeto está organizado nas seguintes pastas:

- `html/`: páginas HTML da aplicação.
- `css/`: arquivo de estilos.
- `js/`: scripts JavaScript separados por responsabilidades.
- `imagens/`: imagens utilizadas no projeto.
- `.github/workflows/`: configuração do workflow de integração e deploy.
- `dist/`: arquivos gerados pelo build de produção. Essa pasta é criada automaticamente e não é versionada.

## Pré-requisitos

Para executar e gerar o build do projeto localmente, são necessários:

- um navegador web atualizado;
- um editor de código, como o Visual Studio Code;
- Git, caso seja necessário clonar o repositório;
- Node.js e npm.

As dependências do projeto são instaladas por meio do npm.

## Instalação e execução local

1. Clone o repositório:

   `git clone https://github.com/vanessa-ads/Projeto_ONG.git`

2. Acesse a pasta do projeto:

   `cd Projeto_ONG`

3. Instale as dependências:

   `npm install`

4. Inicie o servidor de desenvolvimento:

   `npm run dev`

5. Acesse o endereço informado pelo Vite no terminal.

Também é possível gerar e visualizar o build de produção:

`npm run build`

Depois, para executar uma prévia do build:

`npm run preview`

## Build e otimização

O projeto utiliza o Vite como ferramenta de build e bundler.

A configuração está definida no arquivo `vite.config.mjs`, que utiliza a pasta `html/` como raiz da aplicação, define as páginas `index.html`, `projetos.html` e `cadastro.html` como entradas e gera os arquivos de produção na pasta `dist/`.

Durante o build:

- o Vite realiza a minificação de CSS e JavaScript;
- um plugin configurado no Vite utiliza o `html-minifier-terser` para minificar os arquivos HTML;
- os arquivos gerados recebem nomes com hash para facilitar o controle de versões dos assets;
- a configuração `base: '/Projeto_ONG/'` permite o funcionamento correto da aplicação no GitHub Pages.

O processo de produção é executado com:

`npm run build`

As imagens também foram otimizadas utilizando Sharp, com redução das dimensões e compressão da imagem para diminuir o tamanho do arquivo sem perda visual significativa.

## Testes

Foram realizados testes manuais para verificar:

- navegação entre as páginas;
- funcionamento do formulário;
- opções de doação e voluntariado;
- armazenamento e recuperação de dados com LocalStorage;
- navegação e comportamento do menu;
- comportamento do menu em diferentes larguras de tela;
- atualização do estado de acessibilidade do menu;
- funcionamento da aplicação após o build de produção;
- carregamento das páginas, estilos, scripts e imagem no ambiente publicado;
- funcionamento da aplicação no GitHub Pages.

## Acessibilidade

O menu de navegação recebeu melhorias de acessibilidade com:

- botão HTML nativo;
- `aria-label`;
- `aria-expanded`;
- `aria-controls`;
- controle de abertura e fechamento por JavaScript.

Também foram realizadas melhorias de contraste nas cores utilizadas em elementos como cabeçalho, rodapé, botões, títulos, badges, alertas, toast e elementos do modal, visando melhorar a legibilidade da interface.

## Versionamento

O projeto utiliza Git e GitHub para controle de versões.

Foi adotada uma organização baseada nas branches:

- `main`: versão estável;
- `develop`: desenvolvimento;
- branches específicas para funcionalidades ou alterações.

As mensagens de commit seguem o padrão Conventional Commits, utilizando tipos como `feat`, `fix`, `chore`, `ci` e `docs`.

Issues e Milestones são utilizados para organizar as atividades, enquanto Pull Requests registram a integração das alterações entre branches.

A primeira versão estável do projeto é identificada pela tag `v1.0.0`.

## Deploy

O projeto utiliza GitHub Actions para automatizar o processo de publicação.

A cada atualização da branch `main`, o workflow:

1. baixa o código do repositório;
2. configura o Node.js;
3. instala as dependências;
4. executa o build de produção;
5. prepara os arquivos da pasta `dist/`;
6. publica a aplicação no GitHub Pages.

A aplicação está disponível em:

https://vanessa-ads.github.io/Projeto_ONG/
