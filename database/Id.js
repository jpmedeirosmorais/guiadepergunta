const Sequelize = require('sequelize')
const connection = require('./database')

const Id = connection.define('id', {
    perguntaId:{
        type: Sequelize.INTEGER,
        required: true
    },
    respostaId:{
        type: Sequelize.INTEGER,
        required: true
    },
    usuraioId:{
        type: Sequelize.INTEGER,
        required: true
    }

})

Id.sync({force:false}).then(() =>{
    console.log('Model Id criado com sucesso!')
}).catch(err =>{
    console.log('Erro ao criar model Id')
})

module.exports = Id