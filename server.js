const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

require('dotenv').config()

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const agendaRoutes = require('./src/routes/agenda.routes')
app.use('/api', agendaRoutes)
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});