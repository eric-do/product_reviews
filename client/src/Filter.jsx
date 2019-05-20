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

    const setFilters = this.props.setFilters;

    return (
      <FilterDropdown onMouseEnter={this.showMenu.bind(this)} onMouseLeave={this.hideMenu.bind(this)}>
        <FilterButton style={this.state.showMenu ? onMouseEnter : onMouseLeave }>{this.props.filter.displayName.toUpperCase()}</FilterButton>
        {
          this.state.showMenu ? 
            (
              <FilterMenu>
                <FilterOption>
                  <RadioButton onClick={(e) => setFilters(e, this.props.filter.id, {})} name={this.props.filter.id} type="radio" id='all'/>
                  <RadioLabel onClick={(e) => setFilters(e, this.props.filter.id, {})} htmlFor='all'>All</RadioLabel>
                  <OptionCount>({this.props.filter.options.reduce((total, current) => (total + current.count), 0)})</OptionCount>
                </FilterOption>
                {
                  this.props.filter.options.map(option => {
                    let optionId = option.id;
                    let optionName = option.displayName;
                    let count = option.count;

                    return (
                      <FilterOption key={optionId}>
                        <RadioButton onClick={(e) => setFilters(e, this.props.filter.id, optionId)} name={this.props.filter.id} type="radio" id={optionId}/>
                        <RadioLabel onClick={(e) => setFilters(e, this.props.filter.id, optionId)} htmlFor={optionId}>{optionName}</RadioLabel>
                        <OptionCount>({count})</OptionCount>
                      </FilterOption>
                    );
                  })
                }
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

`;

const FilterMenu = styled.ul`
  margin: 0;
  padding: 5px 0px;
  top: 30px;
  left: 0px;
  width: 200px;
  background: #c6d4df;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const FilterOption = styled.li`
  padding: 3px 5px;
  background: #c6d4df;
  color: #556772;
  font-size: 12px;
  font-weight: normal;
`;

const RadioButton = styled.input`
`;

const RadioLabel = styled.label`
`;

const OptionCount = styled.div`
  display: inline;
  color: #7193a6;
  padding-left: 3px;
`;

export default Filter;