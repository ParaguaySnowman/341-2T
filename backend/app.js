const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const professionalRoutes = require('./routes/professional');
const bodyParser = require('body-parser');

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/professional', professionalRoutes);

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})



