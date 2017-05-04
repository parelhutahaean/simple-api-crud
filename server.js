const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const index = require('./routes/index');

mongoose.connect('mongodb://localhost/simple-api-crud');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Alive')
// })

app.use('/', index);

app.listen(3000);
