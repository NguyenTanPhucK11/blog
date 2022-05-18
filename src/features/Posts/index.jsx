import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Post from './components';
import { useSelector } from 'react-redux';

PostFeature.propTypes = {};

function PostFeature({ id, imgUrl }) {
  const initPostList = useSelector((state) => state.post);
  const [postList, setPostList] = useState(initPostList);

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
      <Post imgUrl={imgUrl} {...postList[id - 1]} />
    </div>
  );
}

export default PostFeature;
