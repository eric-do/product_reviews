import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import ReviewRating from './ReviewRating.jsx';


const MiniReview = (props) => (
  <ReviewBox className="review-box">
    <RightColumn>
      <VoteHeader>
        { props.review.recommended ? <Thumb src="/images/thumbs-up.png" /> : <Thumb src="/images/thumbs-down.png" /> }
        <TextContainer>
          <Username>
            {/* <Popup /> */}
            <Link>{ props.review.username }</Link>
          </Username>
          <Hours>
            { `${props.review.hours_played} hrs` }
          </Hours>
        </TextContainer>
      </VoteHeader>
      <CommentContainer>
        <PostDate>
          { `POSTED ${ moment(props.review.review_date).format('MMM Do').toUpperCase()}`}
        </PostDate>
        <Content>
          { `${(props.review.content)}`}
        </Content>
        <ReviewRating mini={true} yes={props.review.helpful_yes_count} no={props.review.helpful_no_count} funny={props.review.helpful_funny_count}/>
      </CommentContainer>
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
  width: 308px;
  margin: 5px 10px 10px 5px;
  
  background-image: linear-gradient(to right, #213143 , transparent);
  color: #c1dbf4;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 10px;
  margin-bottom: 20px;

`;

const Column = styled.div`
  position: relative;
  display: inline-block;
`;

const SmallLink = styled.a`
  font-size: 11px;
  color: #c1dbf4;
  &:hover {
    color: #66C0F4;
  }
`;

const Link = styled.a`
  color: #c1dbf4;
`;

const RightColumn = styled(Column)`
  width: 100%;
`;

const VoteHeader = styled.div`
  vertical-align: top;
  background: #0e1622; 
  height: 24px;
  width: 100%;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const Thumb = styled.img`
  display: inline;
  height: inherit;
`;

const TextContainer = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const Username = styled.div`
  margin-left: 10px;
  display: inline-block;
  font-size: 12px;
`;

const Hours = styled.div`
  display: inline-block;
  padding-left: 50px;
  color: #8091a2;
  font-size: 11px;
`;

const Content = styled.div`
  color: #acb2b8;
  font-size: 13px;
  margin-bottom: 10px;
  line-height: 17px;
`;

const CommentContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

const PostDate = styled.div`
  color: #8091a2;
  font-size: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;


export default MiniReview;
