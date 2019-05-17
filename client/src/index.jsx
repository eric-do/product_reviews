import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import Reviews from './Reviews.jsx';
import $ from 'jquery';
import styled from 'styled-components';
import RecentlyPosted from './RecentlyPosted.jsx';

const ReviewsModule = (props) => (
  <div>
    <Reviews />
    <RecentlyPosted />
  </div>
);

ReactDOM.render(<ReviewsModule style={{display: 'inline-block'}}/>, document.getElementById('reviews'));

