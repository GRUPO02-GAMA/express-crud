const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello World");
});

// const agendaRoutes = require('./src/routes/agenda.routes')
// app.use('/api/agenda', agendaRoutes)

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});