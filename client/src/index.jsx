import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Reviews.jsx';
import $ from 'jquery';
import styled from 'styled-components';
import RecentlyPosted from './RecentlyPosted.jsx';
import Filters from './Filters.jsx';

class ReviewsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      count: 0,
      reviews: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3005/reviews',
      method: 'GET',
      success: (result) => {
        let reviews = result.rows;
        let count = result.count;
        this.setState({ reviews, count });
      },
      // eslint-disable-next-line quotes
      error: () => console.error(`Couldn't get reviews`)
    });
  }

  render() {
    return (
      <ModuleContainer>
        <Filters count={this.state.count}/>
        <Reviews reviews={this.state.reviews}/>
        <RecentlyPosted />
      </ModuleContainer>
    );
  }
}

const ModuleContainer = styled.div`
  background: #1a2738;
  font-family: Arial, Helvetica, sans-serif;
`;

ReactDOM.render(<ReviewsModule style={{display: 'inline-block'}}/>, document.getElementById('reviews'));

