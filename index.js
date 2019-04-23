require('dotenv').config();
const express = require('express');
const app = express();
const user = require('./controllers/user-controller');
const db = require('./db');
const bodyParser = require('body-parser');
const movies = require('./controllers/movie-controller');
const validatesession = require('./middleware/validate-session');

db.sync();

app.use(bodyParser.json());



app.use(require('./middleware/headers'));

app.use('/user', user);
app.use(validatesession);
app.use('/movies', movies);

app.listen(process.env.PORT, function(){
  console.log(`App is listening on ${process.env.PORT}`);
})

app.use(express.static(__dirname + '/Public'))
console.log(__dirname);


