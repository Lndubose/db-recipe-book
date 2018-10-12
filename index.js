const helmet = require('helmet');
const express = require('express');

const Routes = require('./dishes/Routes');

const server = express();
const port = 7000;

server.use(express.json(), helmet())

server.use('/', Routes)


server.get('/', (req, res) => {
  res.json('I am working!')
});


server.listen(port, ()=> console.log(`===Api running on ${port} port===\n`))