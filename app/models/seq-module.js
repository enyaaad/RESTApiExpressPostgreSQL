const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('test', {
        number_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ticket: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
}