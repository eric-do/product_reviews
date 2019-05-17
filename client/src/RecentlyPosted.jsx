import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import ReviewRating from './ReviewRating.jsx';
import $ from 'jquery';
import MiniReview from './MiniReview.jsx';

class RecentlyPosted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    this.getRecent();
  }

  getRecent(date) {
    $.ajax({
      url: 'http://localhost:3005/recent',
      method: 'GET',
      success: (reviews) => this.setState({ reviews }),
      // eslint-disable-next-line quotes
      error: () => console.error(`Couldn't get reviews`)
    });
  }

  render() {
    return (
      <ReviewsWrapper> 
        <Title>RECENTLY POSTED</Title>
        {
          this.state.reviews.map(review => <MiniReview review={review}/>)
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

const ReviewsWrapper = styled.div`
  background: #1a2738;
  font-family: Arial, Helvetica, sans-serif;
  float: left;
  width: 50%;
`;


export default RecentlyPosted;
