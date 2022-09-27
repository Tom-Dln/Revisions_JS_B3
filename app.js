const express = require('express');
const morgan = require('morgan');
const router = require('./routes/routes');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

//Config
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})