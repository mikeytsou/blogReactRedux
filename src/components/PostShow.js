import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; // this helper is provided to us from react-router
    this.props.fetchPost(id);
  }

  render() {
    // this.props === ownProps
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// ownProps is the props object that is headed or going to this component
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }; // ownProps makes it so we only receive the single post we are looking for, rather than the whole list of posts
}

export default connect(mapStateToProps, { fetchPost })(PostShow);