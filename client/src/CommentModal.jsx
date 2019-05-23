import React from 'react';
import Modal from './Modal.jsx';
import styled from 'styled-components';
import Review from './Review.jsx';

class CommentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: ''
    };
    this.onClose = this.onClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onClose(e) {
    this.props.hideModal(e);
  }

  handleChange(e) {
    e.preventDefault();
    const commentText = e.target.value;
    this.setState({ commentText });
  }

  handleSubmit() {

  }

  render() {
    return (
      <Modal onClose={this.onClose}>
        <Review className='ReviewModal' review={this.props.review} />
        <CommentInput value={this.state.commentText} onChange={this.handleChange}/>
        <SubmitButton>Post Comment</SubmitButton>
      </Modal>
    );
  }
}

const CommentInput = styled.textarea`
  background: white;
  width: 520px;
  max-width: inherit;
  min-height: 57px;
  color: #BFBFBF;
  background-color: rgba( 0, 0, 0, 0.4 );
  font-size: 12px;
  margin-bottom: 15px;
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
`;

export default CommentModal;