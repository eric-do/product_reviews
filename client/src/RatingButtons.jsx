import React from 'react';
import styled from 'styled-components';
import HelpfulButton from './HelpfulButton.jsx';

const RatingButtons = ({helpfulness, clickHandler}) => {
  return (
    <Wrapper>
      <HelpfulButton active={helpfulness.yes} clickHandler={clickHandler} string={'Yes'}/>
      <HelpfulButton active={helpfulness.no} clickHandler={clickHandler} string={'No'}/>
      <HelpfulButton active={helpfulness.funny} clickHandler={clickHandler} string={'Funny'}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline
`;

export default RatingButtons;