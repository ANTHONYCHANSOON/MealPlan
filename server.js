const express = require('express');
const apiRouter = require('./Server/routes')


const app = express();

app.use(express.json());

app.use('/api/ourmealplan', apiRouter);

app.listen(process.env.PORT || '3000', () => {
    console.log(`server is running on port : ${process.env.PORT || "3000"}`);
});