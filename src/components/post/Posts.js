import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

const Posts = ({ posts }) => {
  console.log(posts);
  // ─── SIDEEFFECTS ────────────────────────────────────────────────────────────────
  useEffect(() => {
    //
  });
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Posts);
