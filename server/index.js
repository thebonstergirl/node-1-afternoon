const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
const { json } = bodyParser;
const mc = require('./controllers/messages_controller');

app.use(json());
app.use( express.static( __dirname + '/../public/build' ) );

const messagesBaseUrl = '/api/messages';
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

app.listen(port, () => { console.log(`Server listening on port ${port}`) } );