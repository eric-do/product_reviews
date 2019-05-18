import React from 'react';
import styled from 'styled-components';

const Filters = ({count}) => (
  <FilterContainer>
    <FilterSummary>
      {'Showing '}
      <FilterCount>{count}</FilterCount> 
      {' reviews that match the filters above'} 
    </FilterSummary>
  </FilterContainer>
);

const FilterContainer = styled.div`
  padding-left: 5px;
`;

const FilterSummary = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  color: #c6d4df;
  font-size: 15px;
  display: block;
`;

const FilterCount = styled(FilterSummary)`
  font-weight: bold;
  display: inline-block;
`;

export default Filters;