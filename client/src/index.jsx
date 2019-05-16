import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Review from './Review.jsx';
//import css from '../styles/style.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    let reviews = [];
    for (let i = 0; i < 100; i++) {
      reviews.push({
        post_id: faker.random.number(),
        username: faker.internet.email(),
        user_avatar: faker.image.avatar(),
        product_count: faker.random.number(100),
        review_count: faker.random.number(100),
        //game_id: faker.random.number(),
        recommended: faker.random.boolean(),
        review_date: faker.date.past(),
        hours_played:faker.random.number(10000),
        content: faker.lorem.paragraph(),
        language: faker.random.locale(),
        helpful_yes_count: faker.random.number(1000),
        helpful_no_count: faker.random.number(1000),
        helpful_funny_count: faker.random.number(1000)
      });
    }
    this.setState({ reviews });
  }

  render() {
    return (
      <div>
        <h1>Reviews</h1>
        {
          this.state.reviews.map(review => <Review review={review}/>)
        }
      </div>
    );
  }
}

ReactDOM.render(<Reviews />, document.getElementById('reviews'));