import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Post from './components';
import { useSelector } from 'react-redux';

PostFeature.propTypes = {};

function PostFeature({ id, imgUrl }) {
  const initPostList = useSelector((state) => state.post);
  const [postList, setPostList] = useState(initPostList);
  const limit = parseInt((id - 1) / 10 + 1);
  useEffect(() => {
    async function fetchPostList() {
      const requestUrl =
        'https://jsonplaceholder.typicode.com/users/' + limit + '/posts';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json(response);
      setPostList(responseJSON);
      await console.log(postList[id - 1]);
    }
    fetchPostList();
  }, [id]);

  return (
    <div>
      <Post imgUrl={imgUrl} {...postList[parseInt(id / limit) - 1]} />
    </div>
  );
}

export default PostFeature;
