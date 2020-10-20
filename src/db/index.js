const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "admin",
});

const students = require("./models/students");
const books = require("./models/books");

const init = async function() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
    } catch(error) {
        console.log("db > init > ", error);
    }
};

module.exports = {
    init,
    sequelize,
    students,
    books,
}