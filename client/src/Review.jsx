import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import ReviewRating from './ReviewRating.jsx';


const Review = (props) => (
  <ReviewBox className="review-box">
    <LeftColumn>
      <Avatar src={props.review.user_avatar} />
      <Username>
        {/* <Popup /> */}
        <Link>{ props.review.username }</Link>
      </Username>
      <OwnedGames>
        <SmallLink>{ `${props.review.product_count} products in account` }</SmallLink>
      </OwnedGames>
      <ReviewCount>{ `${props.review.review_count} reviews`}</ReviewCount>
    </LeftColumn>
    <RightColumn>
      <VoteHeader>
        { props.review.recommended ? <Thumb src="/images/thumbs-up.png" /> : <Thumb src="/images/thumbs-down.png" /> }
        <TextContainer>
          <Title>
            { props.review.recommended ? 'Recommended' : 'Not recommended'}
          </Title>
          <Hours>
            { `${props.review.hours_played} hrs on record` }
          </Hours>
        </TextContainer>
      </VoteHeader>
      <PostDate>
        { `POSTED ${ moment(props.review.review_date).format('MMM Do').toUpperCase()}`}
      </PostDate>
      <Content>
        { `${(props.review.content)}`}
      </Content>
      <ReviewRating yes={props.review.helpful_yes_count} no={props.review.helpful_no_count} funny={props.review.helpful_funny_count}/>
    </RightColumn>
  </ReviewBox>
);

const Popup = styled.div`
  background: red;
  width: 300px;
  height: 200px;
  position: absolute;
  z-index: 100;
`;

const ReviewBox = styled.div`
  min-width: 522px;
  max-width: 616px;
  margin: 5px 10px 10px 5px;
  background: #141e2c;  
  color: #c1dbf4;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 10px;
  margin-bottom: 20px;

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
  vertical-align: top;
  background: #0e1622; 
  height: 40px;
  margin: 8px 0 10px 0;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const TextContainer = styled.div`
  display: inline-block;
  vertical-align: top;
`;
const Thumb = styled.img`
  display: inline;
`;

const Title = styled.div`
  vertical-align: top;
  display: inline-block;
  padding-left: 5px;
  padding-top: 5px;
  font-size: 16px;
  color: #d6d7d8;
`;

const Hours = styled.div`
  display: block;
  padding-left: 5px;
  color: #8091a2;
  font-size: 11px;
`;

const Content = styled.div`
  color: #acb2b8;
  font-size: 13px;
  margin-bottom: 10px;
  line-height: 17px;
`;

const PostDate = styled.div`
  color: #8091a2;
  font-size: 10px;
  margin-bottom: 15px;
`;


export default Review;
