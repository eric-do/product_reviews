import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

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
        <SmallLink>{ `${props.review.review_count} reviews`}</SmallLink>
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
    </RightColumn>
  </ReviewBox>
);

const Column = styled.div`
  position: relative;
  display: inline-block;
`;

const ReviewBox = styled.div`
  margin: 10px 10px 10px 10px;
`;

const LeftColumn = styled(Column)`
  width: 30%;
`;

const Avatar = styled.img`
  display: inline-block;
  height: 32px;
  width: 32px;
`;

const Username = styled.div`
  display: inline-block;
  font-size: 13px;
  font-weight: bold;
`;

const OwnedGames = styled.div`
  display: block;
`;

const SmallLink = styled.a`
  font-size: 11px;
  color: #c1dbf4;
`;

const Link = styled.a`
  color: #c1dbf4;
`;

const RightColumn = styled(Column)`
  width: 70%;
`;

const VoteHeader = styled.div`
  background: #0e1622; 
`;

const Hours = styled.div`
  color: #8091a2;
  font-size: 11px;
`;

const Title = styled.div`
  font-size: 16px;
  color: #d6d7d8;
`;

const Content = styled.div`
  color: #acb2b8;
  font-size: 13px;
`;

const PostDate = styled.div`
  color: #8091a2;
  font-size: 10px;
`;

export default Review;












// import React from 'react';
// import moment from 'moment';

// const Review = (props) => (
//   <div className="review-box">
//     <div className="left-col">
//       <div className="player-avatar">
//         <img src={props.review.user_avatar} />
//       </div>
//       <div className="username">
//         <a>{ props.review.username }</a>
//       </div>
//       <div className="num-owned-games">
//         <a>{ `${props.review.product_count} products in account` }</a>
//       </div>
//       <div className="num-reviews">
//         <a>{ `${props.review.review_count} reviews`}</a>
//       </div>
//     </div>
//     <div className="right-col">
//     <div className="vote-header tooltip">
//       <div className="thumb">
//         {/* { props.review.recommended ? <img src={require("../images/thumbs-up.png")} /> : <img src={require("../images/thumbs-down.png")} /> } */}
//       </div>
//       <div className="title">
//         { props.review.recommended ? 'Recommended' : 'Not recommended'}
//       </div>
//       <div className="hours">
//         { `${props.review.hours_played} hrs on record` }
//       </div>
//     </div>
//     <div className="posted-date">
//         { `Posted ${ moment(props.review.review_date).format("MMM Do")}`}
//       </div>
//     <div className="content">
//       { `${(props.review.content)}`}
//     </div>
//     </div>
//   </div>
// );

// export default Review;