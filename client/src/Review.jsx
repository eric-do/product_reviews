import React from 'react';

const Review = (props) => (
  <div className="review-box">
    <div className="left-col">
      <div className="player-avatar">
        <img src={props.review.user_avatar} />
      </div>
      <div className="username">
        <a>{ props.review.username }</a>
      </div>
      <div className="num-owned-games">
        <a>{ `${props.review.product_count} products in account` }</a>
      </div>
      <div className="num-reviews">
        <a>{ `${props.review.review_count} reviews`}</a>
      </div>
    </div>
    <div className="right-col">
    <div className="vote-header tooltip">
      <div className="thumb">
      </div>
      <div className="title">
      { props.review.recommended ? `Recommended` : `Not recommended` }
      </div>
      <div className="hours">
      </div>
    </div>
    </div>
  </div>
);

export default Review;