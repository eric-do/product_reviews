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
  const orderMap = {
    helpful: 'helpful_yes_count',
    funny: 'helpful_funny_count', 
    recent: 'review_date'
  };
  const where = req.query.where;
  const order = req.query.order;
  console.log(order);
  const options = {
    where: where,
    order: [[orderMap[order], 'DESC']]
  };

  db.getReviews(options, (err, data) => {
    if (err) { return console.error(err); }
    res.send(data);
  });
});

app.get('/recent', (req, res) => {
  const date = req.query.date || moment().startOf('day').format();
  const where = req.query.where || {};
  console.log('QUERY: ' + JSON.stringify(req.query));
  // eslint-disable-next-line camelcase
  where['review_date'] = {
    [Sequelize.Op.lte]: moment(date).format()
  };

  const options = {
    where: where,
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

app.get('/reviews/filters', (req, res) => {
  res.send([
    {
      id: 'recommended',
      displayName: 'Review Type', 
      options: [
        {
          id: '1',
          displayName: 'Positive',
          count: 48
        },
        {
          id: '0',
          displayName: 'Negative',
          count: 52
        }
      ]
    },
    {
      id: 'language',
      displayName: 'Language', 
      options: [
        {
          'id': 'arabic',
          'displayName': 'Arabic',
          'count': 4
        },
        {
          'id': 'armenian',
          'displayName': 'Armenian',
          'count': 1
        },
        {
          'id': 'bosnian',
          'displayName': 'Bosnian',
          'count': 2
        },
        {
          'id': 'bulgarian',
          'displayName': 'Bulgarian',
          'count': 4
        },
        {
          'id': 'croatian',
          'displayName': 'Croatian',
          'count': 5
        },
        {
          'id': 'czech',
          'displayName': 'Czech',
          'count': 3
        },
        {
          'id': 'danish',
          'displayName': 'Danish',
          'count': 2
        },
        {
          'id': 'dutch',
          'displayName': 'Dutch',
          'count': 3
        },
        {
          'id': 'english',
          'displayName': 'English',
          'count': 2
        },
        {
          'id': 'finnish',
          'displayName': 'Finnish',
          'count': 3
        },
        {
          'id': 'french',
          'displayName': 'French',
          'count': 5
        },
        {
          'id': 'georgian',
          'displayName': 'Georgian',
          'count': 1
        },
        {
          'id': 'german',
          'displayName': 'German',
          'count': 3
        },
        {
          'id': 'greek',
          'displayName': 'Greek',
          'count': 2
        },
        {
          'id': 'hindi',
          'displayName': 'Hindi',
          'count': 4
        },
        {
          'id': 'hungarian',
          'displayName': 'Hungarian',
          'count': 2
        },
        {
          'id': 'italian',
          'displayName': 'Italian',
          'count': 2
        },
        {
          'id': 'japanese',
          'displayName': 'Japanese',
          'count': 4
        },
        {
          'id': 'korean',
          'displayName': 'Korean',
          'count': 3
        },
        {
          'id': 'latvian',
          'displayName': 'Latvian',
          'count': 4
        },
        {
          'id': 'lithuanian',
          'displayName': 'Lithuanian',
          'count': 5
        },
        {
          'id': 'nepali',
          'displayName': 'Nepali',
          'count': 1
        },
        {
          'id': 'norwegian',
          'displayName': 'Norwegian',
          'count': 5
        },
        {
          'id': 'persian',
          'displayName': 'Persian',
          'count': 2
        },
        {
          'id': 'polish',
          'displayName': 'Polish',
          'count': 3
        },
        {
          'id': 'portuguese',
          'displayName': 'Portuguese',
          'count': 4
        },
        {
          'id': 'romanian',
          'displayName': 'Romanian',
          'count': 3
        },
        {
          'id': 'russian',
          'displayName': 'Russian',
          'count': 4
        },
        {
          'id': 'slovene',
          'displayName': 'Slovene',
          'count': 3
        },
        {
          'id': 'spanish',
          'displayName': 'Spanish',
          'count': 3
        },
        {
          'id': 'swedish',
          'displayName': 'Swedish',
          'count': 2
        },
        {
          'id': 'turkish',
          'displayName': 'Turkish',
          'count': 4
        },
        {
          'id': 'ukrainian',
          'displayName': 'Ukrainian',
          'count': 2
        }
      ]
    },
    {
      id: 'review_date',
      displayName: 'Date Range', 
      options: [
        {
          id: 'before2018',
          displayName: 'Before 2018',
          count: 55
        },
        {
          id: 'before2017',
          displayName: 'Before 2017',
          count: 45
        }
      ]
    }
  ]);
});

app.get('/reviews/comments', (req, res) => {
  //const options = req.query.where || {limit: 10};
  let where = req.query.where || {};
  let options = {
    where: where,
    order: [['createdAt', 'DESC']],
    limit: 10
  };
  db.getComments(options, (err, data) => {
    if (err) { return console.error(err); }
    res.send(data);
  });
});

app.post('/reviews/comment', (req, res) => {
  const options = req.body.data;
  db.createComment(options, (err, data) => {
    if (err) { return console.error(err); }
    res.send(data);
  });
  
});