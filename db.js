 const Sequelize = require('sequelize')

const PeliModel = require('./models/Pelis')


 const sequelize = new Sequelize('2a7lzD08ya','2a7lzD08ya','YlQOlHH6yo',{
     host:'remotemysql.com',
     dialect:'mysql'
 });


 const Peli = PeliModel(sequelize,Sequelize)

 sequelize.sync({force:false})
    .then(()=>{
        console.log('Tabla sincronizada')
    })

    module.exports = {Peli}