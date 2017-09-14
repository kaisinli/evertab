const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
const Instagram = require('node-instagram').default;
const redirectUri = 'https://www.instagram.com/evertabextension/';


import INSTAGRAM_CLIENT_ID from '../../secrets.js';
import INSTAGRAM_CLIENT_SECRET from '../../secrets.js';

//body-parsing
app.use('/', bodyParser.json());
app.use('/', bodyParser.urlencoded({ extended: true }));

//serves up static files
app.use(express.static(path.join(__dirname, '../public')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

//listen
app.listen(3000, () => console.log('Listening on port 3000'))



module.exports = app;
