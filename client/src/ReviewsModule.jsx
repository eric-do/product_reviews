import React from 'react';
import Reviews from './Reviews.jsx';
import $ from 'jquery';
import styled from 'styled-components';
import RecentlyPosted from './RecentlyPosted.jsx';
import FilterComponent from './FilterComponent.jsx';
import { tsObjectKeyword } from '@babel/types';

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
            {
              id: 'all',
              displayName: 'All',
              count: 0
            },
            {
              id: 'positive',
              displayName: 'Positive',
              count: 0
            },
            {
              id: 'negative',
              displayName: 'Negative',
              count: 0
            }
          ]
        },
        {
          active: true,
          id: 'language',
          displayName: 'Language', 
          options: [
            {
              id: 'all',
              displayName: 'All languages',
              count: 0
            }
          ]
        },
        {
          active: false,
          id: 'date',
          displayName: 'Date Range', 
          options: [
            {
              id: 'lifetime',
              displayName: 'Lifetime',
              count: 0
            },
            {
              id: 'before2018',
              displayName: 'Before 2018',
              count: 0
            },
            {
              id: 'before2017',
              displayName: 'Before 2017',
              count: 0
            }
          ]
        }
      ],
      count: 0,
      reviews: []
    };
  }

  componentDidMount() {
    this.getReviews(this.updateReviewState.bind(this));
    this.getFilters((err, data) => {
      if (err) { return console.error('Error getting filters'); }
      this.setState({
        filters: data
      });
    });
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

  getFilters(callback) {
    $.ajax({
      url: 'http://localhost:3005/reviews/filters',
      method: 'GET',
      success: (data) => callback(null, data), 
      error: (err) => console.error('Error getting language filter', err)
    });
  }

  getLanguages(callback) {
    $.ajax({
      url: 'http://localhost:3005/reviews/filters/languages',
      method: 'GET',
      success: (data) => {
        let object = {
          active: true,
          id: 'language',
          displayName: 'Language', 
          options: data
        };
        callback(null, object);
      }, 
      error: (err) => console.error('Error getting language filter', err)
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