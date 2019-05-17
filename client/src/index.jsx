import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import $ from 'jquery';
import styled from 'styled-components';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
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
      <ReviewsWrapper> 
        <Title>MOST HELPFUL REVIEWS</Title>
        <Subtitle>IN THE PAST 30 DAYS</Subtitle>
        {
          this.state.reviews.map(review => <Review review={review}/>)
        }
      </ReviewsWrapper>
    );
  }
}

const Title = styled.div`
  padding-top: 20px;
  padding-left: 5px;
  font-size: 14px;
  padding-right: 5px;
  color: white;
  display: inline;
`;

const Subtitle = styled(Title)`
  color: #56707f;
`;

const ReviewsWrapper = styled.div`
  background: #1a2738;
  font-family: Arial, Helvetica, sans-serif;
`;
ReactDOM.render(<Reviews />, document.getElementById('reviews'));

