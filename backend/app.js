const express = require('express');
const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/professional');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/professional', professionalRoutes);

app.listen(8080);
// app.listen(port, () => {
//     console.log(`Running on port ${port}`)
// })



