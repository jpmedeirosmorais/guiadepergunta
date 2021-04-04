const Sequelize =  require('sequelize')
const connection = new Sequelize('guiaperguntas', 'root', '81143763.Jp',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection