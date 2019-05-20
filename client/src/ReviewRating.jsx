import React from 'react';
import styled from 'styled-components';
import RatingButtons from './RatingButtons.jsx';
import $ from 'jquery';

class ReviewRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: {
        yes: false,
        no: false, 
        funny: false
      }
    };
  }

  updateHelpfulness(e, val) {
    e.preventDefault();
    let status = !this.state.helpfulness[val];
    let helpfulness = {
      yes: false,
      no: false, 
      funny: false
    };
    helpfulness[val] = status;

    $.ajax({
      url: 'http://localhost:3005/review/vote',
      method: 'POST',
      data: {
        // eslint-disable-next-line camelcase
        post_id: this.props.post_id,
        helpfulness: helpfulness
      },
      success: () => {
        console.log('PostID ' + this.props.post_id + JSON.stringify(helpfulness));
        this.setState({ helpfulness });
      },
      error: () => console.error('Couldn\'t connect to network.')
    });
  }

  render() {
    let reviewCounts;
    if (this.props.mini) {
      reviewCounts = <div></div>;
    } else {
      reviewCounts = 
        <div>
          <Feedback>{this.props.yes} found this review helpful</Feedback>
          <Feedback>{this.props.funny} found this review funny</Feedback>
        </div>;
    }

    return (<Wrapper>
      <Text>{this.props.mini ? 'Helpful?' : 'Was this review helpful?'}</Text>
      <RatingButtons helpfulness={this.state.helpfulness} clickHandler={this.updateHelpfulness.bind(this)}/>
      {reviewCounts}
    </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  
`;

const Text = styled.div`
  color: #8091a2;
  font-size: 12px;
  line-height: 35px;
  display: inline;  
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 10px;
`;

const Feedback = styled.div`
  color: #647580;
  font-size: 12px;
  display: block;
  padding-top: 0px;
  padding-bottom: 0px;
`;

export default ReviewRating;