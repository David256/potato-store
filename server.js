/*
This code was copied from [1] but I did not like its syntax :v

[1]: https://www.codementor.io/@ravianand1988/easily-4-steps-to-continuous-delivery-auto-deploy-vue-js-app-on-heroku-xljk977pq
*/

const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// Here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')));

// This * route is to serve project on different page routes except root `/`
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`App is listening on port: ${port}`);
