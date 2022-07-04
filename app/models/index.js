const dbConfig = require("../config/bd.conf.js");
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorsAliases:false,
    pool:{
        min:dbConfig.pool.min,
        max:dbConfig.pool.max,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
});
const db={};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.seqModule = require("./seq-module.js")(sequelize);
module.exports = db;