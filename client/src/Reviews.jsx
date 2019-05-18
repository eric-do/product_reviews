import React from 'react';
import Review from './Review.jsx';
import $ from 'jquery';
import styled from 'styled-components';

const Reviews = (props) => (
  <ReviewsWrapper> 
    <Title>MOST HELPFUL REVIEWS</Title>
    <Subtitle>IN THE PAST 30 DAYS</Subtitle>
    {
      props.reviews.map(review => <Review review={review}/>)
    }
  </ReviewsWrapper>
);


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
  float: left;
  width: 50%;
  background: #1a2738;
  font-family: Arial, Helvetica, sans-serif;
`;

export default Reviews;