import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostsByID, DeleteByPostID } from '../../actions/postAction'

import PropTypes from 'prop-types';

class Posts extends Component {

  constructor(props) {
    super(props);

    this.GetByPostID = this.GetByPostID.bind(this);
    this.DeleteByPostID = this.DeleteByPostID.bind(this);

  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }


  GetByPostID(data) {
    this.props.fetchPostsByID(data.id);
  }

  DeleteByPostID(data) {
    this.props.DeleteByPostID(data.id);
  }

  render() {
    const postitems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3> {post.title} </h3>
        <p> {post.body} </p>
        <button type="submit" onClick={this.GetByPostID.bind(this, post)}> Update </button> &nbsp;&nbsp;
                <button type="submit" onClick={this.DeleteByPostID.bind(this, post)}> Delete </button>
      </div>
    ));



    return (
      <div>
        <h1> Post </h1>
        {postitems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
  EditPostByID: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts, fetchPostsByID, DeleteByPostID })(Posts); 