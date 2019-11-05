import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MoonLoader from "react-spinners/MoonLoader";

import { fetchPostsStart } from "../../redux/posts/actions";
import {
  selectIsPostFetching,
  selectPostsItems,
} from "../../redux/posts/selectors";

const Posts = ({ posts, isLoading, fetchPostsStart }) => {
  // console.log(posts);
  // ─── SIDEEFFECTS ────────────────────────────────────────────────────────────────
  useEffect(() => {
    fetchPostsStart();
  }, [fetchPostsStart]);

  // ─── VIEW ───────────────────────────────────────────────────────────────────────
  return (
    <div className="container">
      <header className="header">
        <h4>
          <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>/
          <a href="https://jsonplaceholder.typicode.com/posts">posts</a>
        </h4>
      </header>
      <div className="content">
        <nav className="sidebar"></nav>
        <main className="view">
          <div className="detail">
            {isLoading && <MoonLoader />}
            <ul>
              {posts.map((post) => {
                return <li key={post.id}>{post.title}</li>;
              })}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectPostsItems,
  isLoading: selectIsPostFetching,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsStart: () => {
      return dispatch(fetchPostsStart());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
