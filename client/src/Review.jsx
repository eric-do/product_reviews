import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import ReviewRating from './ReviewRating.jsx';

const Review = (props) => (
  <ReviewBox>
    <LeftColumn>
      <Avatar src={props.review.user_avatar} />
      <Username>
        <Link>{ props.review.username }</Link>
      </Username>
      <OwnedGames>
        <SmallLink>{ `${props.review.product_count} products in account` }</SmallLink>
      </OwnedGames>
        <ReviewCount>{ `${props.review.review_count} reviews`}</ReviewCount>
    </LeftColumn>
    <RightColumn>
    <VoteHeader>
      <div className="thumb">
        {/* { props.review.recommended ? <img src={require("../images/thumbs-up.png")} /> : <img src={require("../images/thumbs-down.png")} /> } */}
      </div>
      <Title>
        { props.review.recommended ? 'Recommended' : 'Not recommended'}
      </Title>
      <Hours>
        { `${props.review.hours_played} hrs on record` }
      </Hours>
    </VoteHeader>
    <PostDate>
        { `Posted ${ moment(props.review.review_date).format("MMM Do")}`}
    </PostDate>
    <Content>
      { `${(props.review.content)}`}
    </Content>
    <ReviewRating yes={props.review.helpful_yes_count} no={props.review.helpful_no_count} funny={props.review.helpful_funny_count}/>
    </RightColumn>
  </ReviewBox>
);

const ReviewBox = styled.div`
  min-width: 522px;
  margin: 5px 10px 10px 5px;
  background: #141e2c;  
  color: #c1dbf4;
  font-family: Arial, Helvetica, sans-serif;
`;

const Column = styled.div`
  position: relative;
  display: inline-block;
`;

const LeftColumn = styled(Column)`
  vertical-align: top;
  width: 30%;
  opacity:0.5;
  &:hover {
    opacity: 1;
  }
`;

const Avatar = styled.img`
  margin-top: 10px;
  margin-left: 10px;
  display: inline-block;
  height: 32px;
  width: 32px;
`;

const Username = styled.div`
  margin-left: 10px;
  display: inline-block;
  font-size: 13px;
  font-weight: bold;
`;

const OwnedGames = styled.div`
  margin-left: 10px;
  display: block;
`;

const SmallLink = styled.a`
  font-size: 11px;
  color: #c1dbf4;
  &:hover {
    color: #66C0F4;
  }
`;

const ReviewCount = styled(SmallLink)`
  margin-left: 10px;
`;

const Link = styled.a`
  color: #c1dbf4;
`;

const RightColumn = styled(Column)`
  width: 70%;
`;

const VoteHeader = styled.div`
  background: #0e1622; 
  height: 40px;
  margin: 8px 0 10px 0;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const Hours = styled.div`
  padding-left: 5px;
  color: #8091a2;
  font-size: 11px;
`;

const Title = styled.div`
  padding-left: 5px;
  padding-top: 5px;
  font-size: 16px;
  color: #d6d7d8;
`;

const Content = styled.div`
  color: #acb2b8;
  font-size: 13px;
  margin-bottom: 10px;
`;

const PostDate = styled.div`
  color: #8091a2;
  font-size: 10px;
`;

export default Review;