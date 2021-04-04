const Sequelize =  require('sequelize')
const connection = new Sequelize('guiaperguntas', 'jpredfield', '81143763.Jp',{
    host: 'mysql743.umbler.com',
    dialect: 'mysql'
})

module.exports = connection