const { response } = require("express");
const {sequelize} = require("../db/index");

function Init(app) {
    app.get("/students", async (request, response) => {
        const students = await sequelize.models.students.findAll({});
        response.status(200).send(students);
    });

    app.get("/students/:id", async (request, response) => {
        const id = request.params;
        const student = await sequelize.models.students.findOne({id});
        response.status(200).send(student);
    });

    app.post("/students", async (request, response) => {
        const {body} = request;
        const {fname, lname, age} = body;

        const createdBook = await sequelize.models.students.create({
            fname,
            lname,
            age,
        });

        response.status(201).send(createdBook);
    });

    app.delete("/students/:id", async (request, response) => {
        const id = request.params;
        const deletedStudent = await sequelize.models.students.findOne({id});
        deletedStudent.destroy();

        response.status(201).send(deletedStudent);
    });

    app.put("/students/:id", async (request, response) => {
        const id = request.params;
        const updatedStudent = await sequelize.models.students.findOne({id});

        const {body} = request;
        const {fname, lname, age} = body;

        updatedStudent.fname = fname ? fname : updatedStudent.fname;
        updatedStudent.lname = lname ? lname : updatedStudent.lname;
        updatedStudent.age = age ? age : updatedStudent.age;

        await updatedStudent.save();

        response.status(201).send(updatedStudent);
    });
}

module.exports = {
    Init,
}