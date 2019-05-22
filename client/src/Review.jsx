import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import ReviewRating from './ReviewRating.jsx';


const Review = ({review}) => (
  <ReviewBox className="review-box">
    <LeftColumn>
      <Avatar src={review.user_avatar} />
      <Username>
        {/* <Popup /> */}
        <Link>{review.username}</Link>
      </Username>
      <OwnedGames>
        <SmallLink>{ `${review.product_count} products in account` }</SmallLink>
      </OwnedGames>
      <ReviewCount>{ `${review.review_count} reviews`}</ReviewCount>
    </LeftColumn>
    <RightColumn>
      <VoteHeader>
        { review.recommended ? <Thumb src="/images/thumbs-up.png" /> : <Thumb src="/images/thumbs-down.png" /> }
        <TextContainer>
          <Title>
            { review.recommended ? 'Recommended' : 'Not recommended'}
          </Title>
          <Hours>
            { `${review.hours_played} hrs on record` }
          </Hours>
        </TextContainer>
      </VoteHeader>
      <PostDate>
        { `POSTED ${ moment(review.review_date).format('MMM Do').toUpperCase()}`}
      </PostDate>
      <Content>
        { `${(review.content)}`}
      </Content>
      <ReviewRating post_id={review.post_id} yes={review.helpful_yes_count} no={review.helpful_no_count} funny={review.helpful_funny_count}/>
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
  width: 100%;
  min-width: 522px;
  max-width: 100%
  margin: 5px 10px 10px 5px;
  background: #141e2c;  
  color: #c1dbf4;
  font-family: "Motiva Sans", Arial, Helvetica, sans-serif;
  padding-bottom: 10px;
  margin-bottom: 20px;
  
  @media only screen and (min-width: 1070px) {
    width: auto;
    max-width: 616px;
  }

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
  background: linear-gradient( to bottom, #515151 5%, #474747 95%);
  padding: 1px;
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
  @media only screen and (max-width: 400px) {
    display: block;
  }
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
