const express = require('express');
const parser = require('body-parser');
const app = express();
const port = 3005;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

app.get('/test', (req, res) => {
  console.log('Working');
});