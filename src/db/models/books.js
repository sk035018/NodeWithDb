const {DataTypes} = require("sequelize");

module.exports = function(sequelize) {
    return sequelize.define("books", {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
        },
        book_name: {
            defaultValue: "My Book",
            allowNull: false,
            type: DataTypes.STRING,
        },
        book_author: {
            defaultValue: "Mr. Shivam Kumar",
            allowNull: false,
            type: DataTypes.STRING,
        },
        price: {
            defaultValue: 500,
            allowNull: false,
            type: DataTypes.INTEGER,
        },
    },
    { timestamps:false }
    );
};