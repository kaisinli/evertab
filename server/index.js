const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser');

//body-parsing
app.use('/', bodyParser.json());
app.use('/', bodyParser.urlencoded({ extended: true }));

//serves up static files
app.use(express.static(path.join(__dirname, '../public')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(3000, () => console.log('Listening on port 3000'))

module.exports = app;
