import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Comment from '../comments';
import { useSelector } from 'react-redux';

ListComments.propTypes = {};

function ListComments({ id }) {
  const listComments = useSelector((state) => state.comment);
  const [commentList, setCommentList] = useState(listComments);
  useEffect(() => {
    async function fetchCommentList() {
      const requestUrl =
        'https://jsonplaceholder.typicode.com/posts/' + id + '/comments';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json(response);
      setCommentList(responseJSON);
    }

    fetchCommentList();
  }, [id]);
  return (
    <ul>
      <h2>COMMENT</h2>
      {commentList.map((comment) => (
        <Comment {...comment} key={'comment-' + comment.id}></Comment>
      ))}
    </ul>
  );
}

export default ListComments;
