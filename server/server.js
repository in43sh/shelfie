const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Controllers
const bin_controller = require('./controllers/bin_controller');

// Bins controller
app.get('/bins', bin_controller.getAll);

const port = process.env.PORT || 3333;
const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );