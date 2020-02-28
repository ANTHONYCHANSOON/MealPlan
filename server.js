const express = require('express');

var PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRouter = require('./Server/routes')

app.use(apiRouter);

app.listen(process.env.PORT || '3000', () => {
    console.log(`server is running on port : ${process.env.PORT || "3000"}`);
});