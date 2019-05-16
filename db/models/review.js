const Sequelize = require('sequelize');
const db = require('../');

module.exports = function(sequelize, DataTypes) {
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
      type: Sequelize.BOOLEAN,
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

  return Review;
}
//module.exports = Review;