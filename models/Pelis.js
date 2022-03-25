module.exports = (sequelize, type)=>{
    return sequelize.define('peli',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:type.STRING,
        description:type.STRING,
        score:type.INTEGER,
        directory:type.STRING,
        
    })
}