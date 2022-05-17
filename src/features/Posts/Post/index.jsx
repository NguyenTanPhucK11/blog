import React from 'react';
import PropTypes from 'prop-types';
import Post from './components';
import Comment from './Comments';

PostFeature.propTypes = {};

function PostFeature(props) {
  const listAlbum = [1, 2, 3, 4];
  const imgUrl = 'https://mdbootstrap.com/img/new/slides/041.webp';

  return (
    <div>
      <Post imgUrl={imgUrl} />
      {/* <Comment /> */}
    </div>
  );
}

export default PostFeature;
