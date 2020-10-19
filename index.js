const exp = require("express");
const app = exp();

const {Sequelize} = require("sequelize");
const sequelize = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    post: 5432,
    username: "postgres",
    password: "admin",
    database: "admin",
});

const User = sequelize.define(
    "users", {
        
    }
)

app.get("/", (request, response) => {
    response.send("I am bad");
});

app.listen(3000, ()=> console.log("Server Activated"));