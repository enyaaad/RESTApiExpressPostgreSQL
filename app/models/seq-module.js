const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("testTable", {
        id: {
            type: DataTypes.STRING,
        },
        ticket: {
            type: DataTypes.STRING,
        },
        created_on: {
            type: DataTypes.NOW,
        },
        end_time:{
            type: DataTypes.DATEONLY,
        }
    });
};