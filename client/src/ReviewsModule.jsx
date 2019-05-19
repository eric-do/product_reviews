import React from 'react';
import Reviews from './Reviews.jsx';
import $ from 'jquery';
import styled from 'styled-components';
import RecentlyPosted from './RecentlyPosted.jsx';
import FilterComponent from './FilterComponent.jsx';

/* REVIEWS MODULE
** Purpose: the ReviewsModule is the starting point for 3 separate components
** 1. Filters: dynamically display available filters pulled from BE
** 2. Reviews: reviews based on selected filter values
** 3. Recent reviews: most recent 10 reviews based on selected date range
*/
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
            ['all', 'All'],
            ['positive', 'Positive'],
            ['negative', 'Negative']
          ]
        },
        {
          active: true,
          id: 'language',
          displayName: 'Language', 
          options: [
            ['all', 'All languages']
          ]
        },
        {
          active: false,
          id: 'date',
          displayName: 'Date Range', 
          options: [
            ['lifetime', 'Lifetime'],
            ['before2018', 'Before 2018'],
            ['before2017', 'Before 2017']
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