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
      filters: [
        {
          active: false,
          id: 'type',
          displayName: 'Review Type', 
          options: [
            'All',
            'Positive',
            'Negative'
          ]
        },
        {
          active: true,
          id: 'language',
          displayName: 'Language', 
          options: [
            'All languages'
          ]
        },
        {
          active: false,
          id: 'date',
          displayName: 'Date Range', 
          options: [
            'Lifetime',
            'Before 2018',
            'Before 2017'
          ]
        }
      ],
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
        <FilterComponent filters={this.state.filters} count={this.state.count}/>
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