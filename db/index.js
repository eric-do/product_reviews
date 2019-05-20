/* eslint-disable camelcase */
const Sequelize = require('sequelize');
const sequelize = new Sequelize('steam', 'root', 'student', {
  host: 'localhost',
  dialect: 'mysql'
});
const Review = require('./models/review.js')(sequelize);
const moment = require('moment');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const getReviews = (options, callback) => {
  Review.findAndCountAll(options)
    .then(data => callback(null, data))
    .catch(err => callback(err));
};

const getLanguageFilter = (callback) => {
  Review.findAll({
    group: ['language'],
    attributes: ['language', [Sequelize.fn('COUNT', 'language'), 'count']]    
  })
    .then(data => {
      let languageArray = data.map(locale => {
        return {
          id: locale.language.toLowerCase(),
          displayName: locale.language,
          count: locale.dataValues.count
        };
      });
      callback(null, languageArray);
    })
    .catch(err => callback(err));
};

Review.sync({ force: false, logging: false }).then(() => {
  console.log('Review table synced');
});

module.exports.getReviews = getReviews;
module.exports.getLanguageFilter = getLanguageFilter;
module.exports.Review = Review;

