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
    const onMouseLeave = {
      borderRadius: '0px',
      display: 'inline-block',
      color: '#4582a5',
      padding: '10px',
      paddingRight: '10px',
      background: '#1f2e42',
      fontSize: '10px'
    };

    const onMouseEnter = {
      borderRadius: '0px',
      display: 'inline-block',
      color: '#4582a5',
      padding: '10px',
      paddingRight: '10px',
      background: '#c6d4df',
      fontSize: '10px'
    };

    return (
      <FilterDropdown onMouseEnter={this.showMenu.bind(this)} onMouseLeave={this.hideMenu.bind(this)}>
        <FilterButton style={this.state.showMenu ? onMouseEnter : onMouseLeave }>NAME</FilterButton>
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

const FilterButton = styled.div`
  // border-radius: 0px;
  // display: inline-block;
  // color: #4582a5;
  // padding: 10px;
  // padding-right: 10px;
  // background: #1f2e42;
  // font-size: 10px;
`;

const FilterMenu = styled.ul`
  margin: 0;
  padding: 0;
  top: 30px;
  left: 0px;
  width: 200px;
  background-color: white;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const FilterOption = styled.li`
  padding: 8px 16px;
  border-bottom: 1px solid #e5e5e5;
  background: #c6d4df;
  color: #556772;
  font-size: 12px;
  font-weight: normal;
`;

export default Filter;