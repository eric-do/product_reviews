import React from 'react';
import styled from 'styled-components';
import Filter from './Filter.jsx';

const FilterComponent = ({setFilters, count, filters}) => (
  <FilterContainer>
    <FilterList>
      {
        filters.map(filter => (<Filter setFilters={setFilters} key={filter.id} filter={filter} />))
      }
    </FilterList>
    <FilterSummary>
      {'Showing '}
      <FilterCount>{count}</FilterCount> 
      {' reviews that match the filters above'} 
    </FilterSummary>
  </FilterContainer>
);
const FilterList = styled.div`
`;

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

export default FilterComponent;