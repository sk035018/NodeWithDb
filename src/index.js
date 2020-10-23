const express = require("express");
const {request} = require("express");
const bookController = require("./controller/book");
const studentController = require("./controller/student");

const db = require("./db/index");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

bookController.Init(app);
studentController.Init(app);

db.init().then(console.log).catch(console.log);

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
