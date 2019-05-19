import React from 'react';
import Reviews from './Reviews.jsx';
import $ from 'jquery';
import styled from 'styled-components';
import RecentlyPosted from './RecentlyPosted.jsx';
import FilterComponent from './FilterComponent.jsx';

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
    this.getReviews(this.updateReviewState.bind(this));
  }

  updateReviewState(data) {
    let reviews = data.rows;
    let count = data.count;
    this.setState({ reviews, count });
  }

  getReviews(callback) {
    $.ajax({
      url: 'http://localhost:3005/reviews',
      method: 'GET',
      success: result => callback(result),
      error: () => console.error('Couldn\'t get reviews')
    });
  }

  render() {
    return (
      <ModuleContainer>
        <FilterComponent count={this.state.count}/>
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

export default ReviewsModule;