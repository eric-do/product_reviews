import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Review from './Review.jsx';
import $ from 'jquery';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3005/reviews',
      method: 'GET',
      success: (reviews) => this.setState({ reviews }),
      error: () => console.error(`Couldn't get reviews`)
    });
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

