/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';

class HelpfulButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  toggleHover(e) {
    let hover = !this.state.hover;
    this.setState({ hover });
  }

  render() {
    let defaultStyle = {
      borderRadius: '2px',
      padding: '0 5px',
      fontSize: '12px',
      lineHeight: '20px',
      cursor: 'pointer',
      color: '#66c0f4',
      borderColor: 'transparent',
      display: 'inline',
      background: '#212c3d',
      marginLeft: '2px',
      marginRight: '2px'
    };

    let hoveredStyle = {
      borderRadius: '2px',
      padding: '0 5px',
      fontSize: '12px',
      lineHeight: '20px',
      cursor: 'pointer',
      color: 'white',
      borderColor: 'transparent',
      display: 'inline',
      background: '#66c0f4',
      marginLeft: '2px',
      marginRight: '2px',
      color: 'white'
    };

    let activeStyle = {
      borderRadius: '2px',
      padding: '0 5px',
      fontSize: '12px',
      lineHeight: '20px',
      cursor: 'pointer',
      color: 'white',
      borderColor: 'transparent',
      display: 'inline',
      background: '#36617c',
      marginLeft: '2px',
      marginRight: '2px',
      color: 'white'
    };

    return (
      <Button onMouseEnter={(e) => this.toggleHover(e)} 
              onMouseLeave={(e) => this.toggleHover(e)} 
              onClick={(e) => this.props.clickHandler(e, this.props.string.toLowerCase())}
              style={this.props.active ? activeStyle 
              : this.state.hover ? hoveredStyle 
              : defaultStyle}>{this.props.string}</Button>
    );
  }
}

const Button = styled.button``;

export default HelpfulButton;