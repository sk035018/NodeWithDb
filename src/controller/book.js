const { response } = require("express");
const {sequelize} = require("../db/index");

function Init(app) {
    app.get("/books", async (request, response) => {
        const books = await sequelize.models.books.findAll({});
        response.status(200).send(books);
    });

    app.get("/books/:id", async (request, response) => {
        const id = request.params;
        const book = await sequelize.models.books.findOne({id});
        response.status(200).send(book);
    });

    app.post("/books", async (request, response) => {
        const {body} = request;
        const {book_name, book_author, price} = body;

        const createdBook = await sequelize.models.books.create({
            book_name,
            book_author,
            price,
        });

        response.status(201).send(createdBook);
    });

    app.delete("/books/:id", async (request, response) => {
        const id = request.params;
        const deletedBook = await sequelize.models.books.findOne({id});
        deletedBook.destroy();

        response.status(201).send(deletedBook);
    });

    app.put("/books/:id", async (request, response) => {
        const id = request.params;
        const updatedBook = await sequelize.models.books.findOne({id});

        const {body} = request;
        const {book_name, book_author, price} = body;

        updatedBook.book_name = book_name ? book_name : updatedBook.book_name;
        updatedBook.book_author = book_author ? book_author : updatedBook.book_author;
        updatedBook.price = price ? price : updatedBook.price;

        await updatedBook.save();

        response.status(201).send(updatedBook);
    });
}

module.exports = {
    Init,
}