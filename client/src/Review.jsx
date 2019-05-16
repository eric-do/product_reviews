import React from 'react';
import moment from 'moment';

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
        {/* { props.review.recommended ? <img src={require("../images/thumbs-up.png")} /> : <img src={require("../images/thumbs-down.png")} /> } */}
      </div>
      <div className="title">
        { props.review.recommended ? 'Recommended' : 'Not recommended'}
      </div>
      <div className="hours">
        { `${props.review.hours_played} hrs on record` }
      </div>
    </div>
    <div className="posted-date">
        { `Posted ${ moment(props.review.review_date).format("MMM Do")}`}
      </div>
    <div className="content">
      { `${(props.review.content)}`}
    </div>
    </div>
  </div>
);

export default Review;