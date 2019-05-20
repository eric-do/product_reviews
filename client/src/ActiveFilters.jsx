import React from 'react';
import styled from 'styled-components';

const ActiveFilters = ({activeFilters}) => (
  <FilterWrapper>
    {'Filters'}
    {
      
      Object.keys(activeFilters).map(key => {
        return (
          <FilterButton>
            <FilterName>{activeFilters[key].optionName}</FilterName>
            {/* <DeleteButton src='./images/deleteSearchTerm.png'></DeleteButton> */}
          </FilterButton>
        );
      })
    }
  </FilterWrapper>
);

const FilterWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  color: #c6d4df;
  font-size: 15px;
  display: inline-block;
  text-align: center;
`;

const FilterButton = styled.div`
  border-radius: 2px;
  padding-right: 25px;
  padding-left: 5px;
  background: #485260;
  display: inline-block;
  font-size: 12px;
  height: 24px;
  margin-left: 10px;
  vertical-align: middle;
  line-height: 24px;
  background-image: url('/images/deleteSearchTerm.png');
  background-repeat: no-repeat;
  background-position: right 5px center;
`;

const DeleteButton = styled.img`
`;

const FilterName = styled.div``;

export default ActiveFilters;