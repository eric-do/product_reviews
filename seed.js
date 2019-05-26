/* eslint-disable camelcase */
const faker = require('faker');
const db = require('./db');
const reviews = [];
const languageArray = [
  'Arabic',
  'Bulgarian',
  'Bosnian',
  'Czech',
  'German',
  'Danish',
  'Greek',
  'English',
  'Spanish',
  'Estonian',
  'Persian',
  'Finnish',
  'French',
  'Hindi',
  'Croatian',
  'Hungarian',
  'Armenian',
  'Italian',
  'Japanese',
  'Georgian',
  'Korean',
  'Lithuanian',
  'Latvian',
  'Nepali',
  'Dutch',
  'Norwegian',
  'Polish',
  'Portuguese',
  'Romanian',
  'Russian',
  'Slovene',
  'Swedish',
  'Turkish',
  'Ukrainian',
  'Chinese',
];

const getRandomInteger = (max) => Math.floor(Math.random() * Math.floor(max));
const getRandomParagraph = () => {
  const random = getRandomInteger(1);
  const paragraph = [faker.lorem.paragraph, faker.lorem.paragraphs];
  return paragraph[random]();
};

for (let i = 0; i < 100; i++) {
  reviews.push({
    post_id: faker.random.number(),
    recommended: faker.random.boolean(),
    review_date: faker.date.past(),
    hours_played: faker.random.number(10000),
    content: faker.lorem.paragraph(),
    language: languageArray[getRandomInteger(languageArray.length - 1)],
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


