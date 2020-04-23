const express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("app/public"));

require("./app/routes/api-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


// const express = require ('express');
// const apiRouter = require('./Server/routes')

// const app = express();

// app.use(express.json());

// app.use('/api/meal', apiRouter)

// app.listen(process.env.PORT || '3000', () => {
//     console.log(`server is running on port : ${process.env.PORT || "3000"}`)
// })

//commit


// const express = require('express');

// var PORT = process.env.PORT || 8080;

// const app = express();

// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const apiRouter = require('./routes')

// app.use(apiRouter);

// app.listen(process.env.PORT || '3000', () => {
//     console.log(`server is running on port : ${process.env.PORT || "3000"}`);
// });