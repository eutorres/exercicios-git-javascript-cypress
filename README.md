# Exercícios de Git, JavaScript e Cypress

Esse repositório tem como objetivo praticarmos conceitos da ferramenta de versionamento de código GIT, linguagem de programação JavaScript e a ferramenta em JavaScript de teste *end-to-end* Cypress.

## Básico de Git e GitHub

O Git é um sistema *open-source* de controle de versão utilizado pela grande maioria dos desenvolvedores atualmente. Com ele podemos criar todo histórico de alterações no código do nosso projeto e facilmente voltar para qualquer ponto para saber como o código estava naquela data.

Além disso, o Git nos ajuda muito a controlar o fluxo de novas funcionalidades entre vários desenvolvedores no mesmo projeto com ferramentas para análise e resolução de conflitos quando o mesmo arquivo é editado por mais de uma pessoa em funcionalidades diferentes.

### Funcionamento

Tudo no Git é movido através dos pontos na história do projeto que são chamados de *commits*, esses pontos são formados por conjuntos de alterações em um ou mais arquivos e somados a um descritivo que resume as alterações nesse ponto.

De forma prática, pensando que tenhamos que desenvolver um sistema de login completo, nossos *commits* podem ficar dessa forma:

1. Configuração da estrutura do projeto
2. Estrutura da página de login
3. Estilos CSS da página de login
4. Estrutura da página de cadastro
5. Resolvido problema no login
6. Estilos CSS da página de cadastro

Veja que nossos *commits* descrevem exatamente as alterações que o código sofreu e além do título podemos detalhar ainda mais com um texto maior.

É muito importante essas informações estarem bem completas para que todos do time (inclusive você no futuro) possam entender o que foi feito nesse ponto.

### Formato de Ramificações 

Imagine que você esteja trabalhando no meio de uma grande funcionalidade, pode levar até 2 meses para terminá-la. Em uma bela manhã de sol seu chefe resolve pedir urgentemente uma alteração na versão em produção da aplicação, ou seja, você não pode utilizar o código em que está trabalhando pois o mesmo possui features inacabadas. Como resolver?

As ramificações ou *branchs* no Git são formas de termos uma mesma versão do código sofrendo alterações e recebendo *commits* de diferentes fontes e inclusive por diferentes desenvolvedores.

Dessa forma, nós podemos manter um ramo para nossa funcionalidade que irá levar mais tempo e trabalhar em outro *branch* com a versão em produção para realizar alterações mais urgentes. E fica tranquilo, no fim de tudo o Git ainda vai nos ajudar a unir os códigos desses dois ramos de forma muito simpática.

Por padrão, você sempre está trabalhando em um ramo no Git, e mesmo quando você não cria um *branch*, o Git cria automaticamente um *branch* chamado master como padrão.

Na imagem abaixo podemos ver um exemplo de trabalho com vários ramos e commits aplicados. Veja que em alguns pontos da história os ramos são unidos para que as alterações de um ramo sejam aplicadas a outro.

![ramificacoes](./img/branchs.png)

Nesse caso, *“master”*, *“Hotfix”*, *“Release”*, *“Develop”* e os *“Feature”* são os ramos enquanto que os círculos são os *commits*. As caixas com v0.1, v0.2 e v1.0 são versões (conhecidas por tags) que foram pra versão em produção e podem ser compostas por pontos na história de vários branchs.

## Principais comandos do Git

`git init` : iniciando git na pasta do projeto (só deve ser feito quando você criar um projeto novo); 

`git add nome-do-arquivo-incluindo-extensão`: adicionando os arquivos no estágio de controle;

`git add .`: adicionar todos os arquivos do diretório;

`git status`: saber o status do projeto, verificar quais arquivos estão alterados, quais já foram adicionados e deletados;

`git reset HEAD nome-do-arquivo`: voltando ao estágio anterior do adicionamento;

`git commit -m "Mensagem do commit"`: Realizando um *commit*;

`git reset HEAD~1`: voltar um *commit* (CUIDADO);

`git reset HEAD~2`: voltar dois *commits* (CUIDADO);

`git reset HEAD~1 --soft`: voltando um commit e deixando o arquivo no estagio anterior (CUIDADO);

`git reset HEAD~1 --hard`: Voltando um commit e excluindo o arquivo, deixando no estágio anterior (MUITO CUIDADO);

`git checkout -b nome-do-branch`: criando uma *branch*;

`git branch`: verificando qual *branch* está;

`git checkout master`: voltando para a *branch* master;

`git branch -D nome-do-branch`: removendo uma *branch*

`git rm nome-do-arquivo`: deletando arquivos

`git pull`: atualizando a *master* (quando você já está na *branch* master)

`git pull origin master`: atualizando a *branch* que está atualmente com a *branch* master;

`git push -u origin nome-branch`: criando um *merge request* para a *master*;

`git clone url_projeto`: realizando o clone de um projeto existente.

**Referências:** [Git - guia prático](https://rogerdudler.github.io/git-guide/index.pt_BR.html)

## GitHub

O Github é um serviço online de hospedagem de repositórios Git (como são chamados os projetos que utilizam Git). Com ele podemos manter todos nossos commits e ramos sincronizados entre os membros do time.

Além de servir como hospedagem, o Github possui muitas integrações com serviços que auxiliam no deploy da aplicação através de integração contínua.


## Vamos para a Prática.

A prática consiste da seguinte forma. Todos que estão na organização deve realizar um *fork* desse repositório, isto é "pegar" o projeto para o seu usuário. Para realizar o *fork* basta clicar no botão *fork* no canto direito da tela do projeto. Após o *fork* todo o projeto irá para seu usuário.

Após o *fork* é necessário realizar o *clone* do projeto para sua máquina, para isso, no projeto em seu usuário vá no botão verde escrito **Clone or download** copie o link, e execute o comando de clone (veja principais comandos do Git) no diretório que você quer salvar em sua máquina. Feito esses passos vamos para as práticas.

Escolha uma *issue* no link (https://github.com/QA-UX/exercicios-git-javascript-cypress/issues), e assine para você, isto é, avisando para todos que você está realizando a determinada *issue*. 

Feito a escolha do exercício, crie uma *branch* com o título do exercício em sua máquina e desenvolva o exercício proposto. Após terminado o exercício deve realizar os passos que são necessários para subir para seu repositório de seu usuário.

Completado o passo anterior é necessário criar um *merge request* para o repositório oficial (o repositório que se encontra na organização) Esse passo é idêntico ao passo de criar um *merge request* no *GitLab*. 

**OBS**: os exercícios desenvolvidos devem ser adicionados na pasta respectiva e no arquivo que já está adicionado, por exemplo, os exercícios de javascript devem ser adicionados na pasta javascript, arquivo **exercicio.js** .

Boa Sorte!! 
