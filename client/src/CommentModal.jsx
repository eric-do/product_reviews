/* eslint-disable camelcase */
import React from 'react';
import Modal from './Modal.jsx';
import styled from 'styled-components';
import Review from './Review.jsx';
import Comment from './Comment.jsx';
import faker from 'faker';
import $ from 'jquery';

class CommentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: '',
      comments: []
    };
    this.onClose = this.onClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }

  /* MODEL */
  getComments() {
    $.ajax({
      url: 'http://localhost:3005/reviews/comments',
      method: 'GET',
      data: {
        where: {
          post_id: this.props.review.post_id
        }
      },
      success: data => this.setComments(data),
      error: err => console.error('Couldn\'t retrieve comments')
    });
  }

  setComments(comments) {
    this.setState({ comments });
  }

  /* VIEW */
  onClose(e) {
    this.props.hideModal(e);
  }

  /* CONTROLLER */
  handleChange(e) {
    e.preventDefault();
    const commentText = e.target.value;
    this.setState({ commentText });
  }

  handleSubmit(e) {
    e.preventDefault();
    const text = this.state.commentText;
    const fakeData = {
      /* COMMENT FIELDS */
      post_id: this.props.review.post_id,
      comment_id: faker.random.number(), 
      comment_date: faker.date.past(),
      comment_content: this.state.commentText,
  
      /* USER FIELDS */
      user_id: faker.random.number(), 
      username: faker.internet.email().split('@')[0],
      user_avatar: faker.image.avatar(),
  
      /* STEAM INFO */
      steam_level: faker.random.number(500),
      acheivement_text: faker.lorem.words(),
      experience_points: faker.random.number(500)
    };

    this.setState({commentText: ''}, () => {
      $.ajax({
        url: 'http://localhost:3005/reviews/comment',
        method: 'POST',
        data: { data: fakeData },
        success: () => {
          this.setState({ commentText: '' }, () => {
            this.getComments();
          });
        },
        error: (err) => console.error(err)
      });
    });
  }

  render() {
    return (
      <Modal onClose={this.onClose}>
        <Review className='ReviewModal' review={this.props.review} />
        <CommentInput value={this.state.commentText} onChange={this.handleChange}/>
        <SubmitButton onClick={this.handleSubmit}>Post Comment</SubmitButton>
        <CommentContainer>
          {
            this.state.comments.map(comment => (<Comment comment={comment} />))
          }
        </CommentContainer>
      </Modal>
    );
  }
}

const CommentInput = styled.textarea`
  width: 100%;
  max-width: inherit;
  min-height: 57px;
  color: #BFBFBF;
  background-color: rgba( 0, 0, 0, 0.4 );
  font-size: 12px;
  margin-bottom: 15px;
  border: none;
  padding: 4px 6px 4px 6px;
  border-radius: 4px;
  border-left: 1px solid #000;
  border-top: 1px solid #000;
  border-right: 1px solid #354357;
  border-bottom: 1px solid #354357;
  overflow: hidden;
  box-sizing: border-box;
`;

const CommentContainer = styled.div`
  overflow-y: auto;
  max-height: 300px;
  background: #141e2c;
  padding: 10px;
`;

const SubmitButton = styled.div`
  padding: 0 15px;
  font-size: 12px;
  line-height: 20px;
  background: linear-gradient( to bottom, #799905 5%, #536904 95%);
  color: #D2E885;
  cursor: pointer;
  border-radius: 2px;
  width: auto;
  margin-bottom: 20px;
  &:hover {
    background: linear-gradient( to bottom, #a4d007 5%, #536904 95%);
    color: white;
  }
`;

export default CommentModal;