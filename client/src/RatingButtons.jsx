import React from 'react';
import styled from 'styled-components';
import HelpfulButton from './HelpfulButton.jsx';

const RatingButtons = ({helpfulness, updateHelpfulness}) => {
  return (
    <Wrapper>
      <HelpfulButton active={helpfulness.yes} updateHelpfulness={updateHelpfulness} string={'Yes'}/>
      <HelpfulButton active={helpfulness.no} updateHelpfulness={updateHelpfulness} string={'No'}/>
      <HelpfulButton active={helpfulness.funny} updateHelpfulness={updateHelpfulness} string={'Funny'}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline
`;

export default RatingButtons;