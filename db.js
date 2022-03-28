 const Sequelize = require('sequelize')

const PeliModel = require('./models/Pelis')
const UserModel = require('./models/users')

 const sequelize = new Sequelize('2a7lzD08ya','2a7lzD08ya','YlQOlHH6yo',{
     host:'remotemysql.com',
     dialect:'mysql'
 });


 const Peli = PeliModel(sequelize,Sequelize)
 const User = UserModel(sequelize,Sequelize)

 sequelize.sync({force:false})
    .then(()=>{
        console.log('Tabla sincronizada')
    })

    module.exports = {Peli,User}