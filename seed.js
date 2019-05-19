/* eslint-disable camelcase */
const faker = require('faker');
const db = require('./db');

const reviews = [];
for (let i = 0; i < 100; i++) {
  reviews.push({
    post_id: faker.random.number(),
    recommended: faker.random.boolean(),
    review_date: faker.date.past(),
    hours_played: faker.random.number(10000),
    content: faker.lorem.paragraph(),
    language: faker.random.locale(),
    helpful_yes_count: faker.random.number(1000),
    helpful_no_count: faker.random.number(1000),
    helpful_funny_count: faker.random.number(1000),
    user_id: faker.random.number(),
    username: faker.internet.email().split('@')[0],
    user_avatar: faker.image.avatar(),
    product_count: faker.random.number(100),
    review_count: faker.random.number(100),
    steam_level: faker.random.number(100),
    registration_date: faker.date.past()
  });
}

db.Review.sync({ force: true, logging: false }).then(() => {
  console.log('Review table dropped and synced');
});

db.Review.bulkCreate(reviews)
  .then(() => {
    return db.Review.findAll();
  })
  .then(reviews => {
    console.log(reviews);
  });