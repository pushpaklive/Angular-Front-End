const express = require('express');

const app = express();

/*app.use((req, res, next) => {
   console.log("In 1st middleware.");
   next();
});*/

app.use((req, res, next) => {
   res.send('Hello from express......');
 });

 module.exports = app;