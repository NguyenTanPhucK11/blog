import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Post from './components';
import { useSelector } from 'react-redux';

PostFeature.propTypes = {};

function PostFeature() {
  const listAlbum = useSelector((state) => state.post);
  const [postList, setPostList] = useState(listAlbum);
  const imgUrl = 'https://mdbootstrap.com/img/new/slides/041.webp';

  useEffect(() => {
    async function fetchPostList() {
      const requestUrl = 'https://jsonplaceholder.typicode.com/users/1/posts';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json(response);
      setPostList(responseJSON);
    }

    fetchPostList();
  }, []);

  return (
    <div>
      <Post imgUrl={imgUrl} {...postList[9]} />
    </div>
  );
}

export default PostFeature;
