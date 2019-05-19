import React from 'react';
import styled from 'styled-components';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({
      showMenu: true
    });
  }

  hideMenu(e) {
    e.preventDefault();
    this.setState({
      showMenu: false
    });
  }

  render() {
    return (
      <FilterDropdown onMouseEnter={this.showMenu.bind(this)} onMouseLeave={this.hideMenu.bind(this)}>
        <FilterButton>Name</FilterButton>
        {
          this.state.showMenu ? 
            (
              <FilterMenu>
                <FilterOption>Option 1</FilterOption>
                <FilterOption>Option 2</FilterOption>
                <FilterOption>Option 3</FilterOption>
              </FilterMenu>
            )
            : null
        }
      </FilterDropdown>
    );
  }
}

const FilterDropdown = styled.div`
  display: inline-block;
  position: relative;
`;

const FilterButton = styled.button`
  display: inline;
`;

const FilterMenu = styled.ul`
  margin: 0;
  padding: 0;
  top:45px;
  right:0px;
  width: 200px;
  background-color: white;
  font-weight:bold;
  position: absolute;

  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const FilterOption = styled.li`
padding: 8px 16px;
border-bottom: 1px solid #e5e5e5;

`;

export default Filter;