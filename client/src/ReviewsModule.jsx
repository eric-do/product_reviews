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
      filters: [],
      activeFilters: {},
      count: 0,
      reviews: []
    };
    this.updateReviewState = this.updateReviewState.bind(this);
  }

  componentDidMount() {
    this.getReviews(this.state.activeFilters, this.updateReviewState);
    this.getFilters((err, data) => {
      if (err) { return console.error('Error getting filters'); }
      this.setState({
        filters: data
      });
    });
  }

  updateReviewState(data) {
    console.log(data);
    let reviews = data.rows;
    let count = data.count;
    this.setState({ reviews, count });
  }

  getReviews(options, callback) {
    $.ajax({
      url: 'http://localhost:3005/reviews',
      method: 'GET',
      data: {where: options},
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

  setFilters(e, filter, option) {
    e.preventDefault();
    let activeFilters = Object.assign(this.state.activeFilters);
    activeFilters[filter] = option;
    this.setState({activeFilters});
    this.getReviews(activeFilters, this.updateReviewState);
  }

  render() {
    return (
      <ModuleContainer>
        <FilterComponent setFilters={this.setFilters.bind(this)} filters={this.state.filters} count={this.state.count}/>
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