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

//new Instagram client
const instagram = new Instagram({
    clientId: INSTAGRAM_CLIENT_ID,
    clientSecret: INSTAGRAM_CLIENT_SECRET,
    accessToken
});

app.get('/auth/instagram', (req, res, next) => {
  res.redirect(instagram.getAuthorizationUrl(redirectUri, {
    scope: ['basic', 'public-content'] },
  ));
});

app.get('/auth/instagram/callback', async (req, res) => {
  try {
    const code = req.query.code;
    const data = await instagram.authorizeUser(code, redirectUri);
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

module.exports = app;
