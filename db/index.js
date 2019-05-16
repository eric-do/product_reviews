const Sequelize = require('sequelize');
const sequelize = new Sequelize('steam', 'root', 'student', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const getReviews = (callback) => {
  Review.findAll()
  .then(data => callback(null, data))
  .catch(err => callback(err));
}

const Review = sequelize.define('review', {
  /* REVIEW FIELDS */
  post_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  }, 
  recommended: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  review_date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  hours_played: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  language: {
    type: Sequelize.STRING,
    allowNull: false
  },
  helpful_yes_count: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  helpful_no_count: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  helpful_funny_count: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  }, 
  
  /* USER FIELDS */
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user_avatar: {
    type: Sequelize.STRING,
    allowNull: false
  },
  product_count: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  review_count: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  steam_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  registration_date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
});

Review.sync({ force: false , logging: false }).then(() => {
  console.log('Review table synced');
});

module.exports.getReviews = getReviews;
module.exports.Review = Review;