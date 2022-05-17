import React from 'react';
import PropTypes from 'prop-types';
import Post from './components';
import { useSelector } from 'react-redux';

PostFeature.propTypes = {};

function PostFeature(props) {
  const listAlbum = useSelector((state) => state.post);
  const imgUrl = 'https://mdbootstrap.com/img/new/slides/041.webp';

  return (
    <div>
      <Post imgUrl={imgUrl} {...listAlbum[0]} />
    </div>
  );
}

export default PostFeature;
