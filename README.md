# guiadepergunta
 Site similar ao perguntas do yahoo.

coisas para se instalar no projeto backend em node.js:

1.INSTALAÇÕES:

	-npm init: cria o arquivo json com as configurações do projeto.
	-express: framework responsável pela base do back end em node.
	-sequelize ou mongoose para o banco de dados(Neste caso foi utilizado o sequelize).
	-um renderizador para o html como o ejs e o handlebars(neste projeto foi utilizado o ejs).
	-framework para front-end como o bootstrap.
	-body-parser para poder converter o body da requisição do html e converte para json.
	-nodemon para atualização em tempo real do processo de desenvolvimento.

2.ESTRUTURA DO PROJETO:

	-o app.js fica na pasta principal do projeto e é o entry point do projeto.
	-é criado uma pasta com o nome de view onde ficam os arquivos html.
	
	-criar a pasta public:
		dentro da pasta criar outra pasta com o nome de css e dentro dela o arquivo style.css
		criar a pasta img para imagens
		criar pasta js para a instalação do bootstrap
	
	-criar pasta para banco de dados:
		dentro da pasta criar arquivo de extensão js com a seguinte configuração caso seja o sequelize:
			const Sequelize =  require('sequelize')
			const connection = new Sequelize('guiaperguntas', 'root', '81143763.Jp',{
    				host: 'localhost',
    				dialect: 'mysql'
			})

			module.exports = connection

3.PASSOS INICIAIS:

	-Fazer export no express. 'const express = require('express')
	-Setar view egine. 'app.set('view engine', 'ejs')'
	-Usar pasta 'public'. "app.use(express.static('public'))"
	-Usar a linha 'app.use(express.urlencoded({extended: false}))'
	-Usar o 'app.use(express.json())'
	-Ativar o 'app.listen(porta, ()=>{ console.log('App rodando em: porta') })
	
	-Criar rota principal e as outras rotas necessárias

4.CONFIGURAÇÕES DO DATABASE:

    -Criar o a pasta data base e dentro dela inserir o arquivo database.js(neste arquivo vai ficar concentrado a parte da configuração de conexão com o banco de dados)
    -Criar model para salvar as perguntas no banco de dados(nome do model: Pergunta.js)
	-Configuração inicial: const connection = require('./database/database')