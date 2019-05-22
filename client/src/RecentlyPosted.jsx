import React from 'react';
import styled from 'styled-components';
import MiniReview from './MiniReview.jsx';

const RecentlyPosted = ({reviews}) => ((
  <ReviewsWrapper> 
    <Title>RECENTLY POSTED</Title>
    {
      reviews.map(review => <MiniReview key={review.post_id} review={review}/>)
    }
  </ReviewsWrapper>
));


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
  width: 100%;

  @media only screen and (min-width: 1000px) {
    width: 50%;
  }
`;


export default RecentlyPosted;
