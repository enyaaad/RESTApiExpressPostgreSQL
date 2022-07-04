module.exports={
    HOST:"localhost",
    USER:"postgres",
    PASSWORD:"8936967",
    DB:"backend",
    dialect: "postgres",
    pool:{
        min:0,
        max:5,
        acquire:30000,
        idle:10000
    }
};