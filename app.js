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

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
})