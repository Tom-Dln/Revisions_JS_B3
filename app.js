const express = require('express');
const morgan = require('morgan');
const router = require('./routes/routes');
const exphbs = require('express-handlebars');

const app = express();

require('dotenv').config();


console.log(process.env.PORT);

//Config
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(router);

<<<<<<< HEAD
app.listen(process.env.PORT, () => {
=======
app.listen(port, () => {
>>>>>>> b196d6c9b7dc7ebdf5051356fd09709d708a70bd
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
})