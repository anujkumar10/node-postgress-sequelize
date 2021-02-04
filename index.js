const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.port | 3002;
const router = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
    console.log(`server started on port, ${port}`);
})

module.exports = app;