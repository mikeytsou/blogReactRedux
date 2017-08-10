import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostIndex extends Component {
  // lifecycle method that gets automatically called by react immediatley AFTER this component gets rendered inside the dom
  // great for fetching data(api calls), or load something AFTER this component shows up on the page
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, (post) => {
      return (
        <li className="item" key={post.id}>{post.title}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="ui list">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}
// whenever we want to consume anything from application level state, we always define mapStateToProps
function mapStateToProps(state) {
  return { posts: state.posts };
}

// Using { fetchPosts } here is identical to the mapDispatchToProps function and is a es6 shortcut
// However, you can't do any computations using this shortcut
// fetchPosts is now available as this.props.fetchPosts throughout this component
export default connect(mapStateToProps, { fetchPosts })(PostIndex);
