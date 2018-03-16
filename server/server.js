const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3333;
const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );