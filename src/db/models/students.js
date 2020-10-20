const {DataTypes} = require("sequelize");

module.exports = function(sequelize) {
    return sequelize.define("students", {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
        },
        fname: {
            defaultValue: "First Name",
            allowNull: false,
            type: DataTypes.STRING,
        },
        lname: {
            defaultValue: "Last Name",
            allowNull: false,
            type: DataTypes.STRING,
        },
        age: {
            defaultValue: 18,
            allowNull: false,
            type: DataTypes.INTEGER,
        },
    },
    { timestamps:false }
    );
};