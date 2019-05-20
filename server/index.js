const express = require('express');
const parser = require('body-parser');
const db = require('../db');
const app = express();
const port = 3005;
const moment = require('moment');
const Sequelize = require('sequelize');

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

app.get('/test', (req, res) => {
  console.log('Working');
});

app.get('/reviews', (req, res) => {
  const options = {
    order: [['helpful_yes_count', 'DESC']]
  };

  db.getReviews(options, (err, data) => {
    if (err) { return console.error(err); }
    res.send(data);
  });
});

app.get('/recent', (req, res) => {
  const date = req.query.date || moment().startOf('day').format();
  const options = {
    where: {
      // eslint-disable-next-line camelcase
      review_date: {
        [Sequelize.Op.lte]: moment(date).format()
      }
    },
    order: [['review_date', 'DESC']],
    limit: 10
  }; 

  db.getReviews(options, (err, data) => {
    if (err) { return console.error(err); }
    res.send(data);
  });
});

app.post('/review/vote', (req, res) => {
  var postId = req.body.post_id;
  var helpfulness = req.body.helpfulness;
  console.log(postId, helpfulness);
  res.send('success');
});

app.get('/reviews/filters/languages', (req, res) => {
  console.log('Attempting to get languages');
  db.getLanguageFilter((err, data) => {
    if (err) { console.error(err); }
    res.send(data);
  });
});