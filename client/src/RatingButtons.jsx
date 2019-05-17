import React from 'react';
import styled from 'styled-components';

// class RatingButtons extends React.Component {
//   constructor() {
//     super(props);
//     this.state = {
//       yes: false,
//       no: false,
//       funny: false
//     };
//   }

//   clickHandler(e, val) {
//     e.preventDefault();
//     this  
//   }

//   render() {
//     return (
//       <Wrapper>
//         <Button onClick={(e) => this.clickHandler(e, 'yes')}>Yes</Button>
//         <Button onClick={(e) => this.clickHandler(e, 'no')}>No</Button>
//         <Button onClick={(e) => this.clickHandler(e, 'funny')}>Funny</Button>
//       </Wrapper>
//     );
//   }
// }
const RatingButtons = (props) => (
  <Wrapper>
    <Button>Yes</Button>
    <Button>No</Button>
    <Button>Funny</Button>
  </Wrapper>
);

const Wrapper = styled.div`
  display: inline
`;

const Button = styled.button`
  border-radius: 2px;
  padding: 0 5px;
  font-size: 12px;
  line-height: 20px;
  cursor: pointer;
  color: #66c0f4;
  border-color: transparent;
  display: inline;
  background: #212c3d;
  margin-left: 2px;
  margin-right: 2px;
  &:hover{
    color: white;
    background: #66c0f4
  }
`;

export default RatingButtons;