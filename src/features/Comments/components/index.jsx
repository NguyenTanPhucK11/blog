import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comments';
import { useSelector } from 'react-redux';

ListComments.propTypes = {};

function ListComments(props) {
  const listComments = useSelector((state) => state.comment);
  return (
    <ul>
      {listComments.map((comment) => (
        <Comment {...comment} key={'comment-' + comment.id}></Comment>
      ))}
    </ul>
  );
}

export default ListComments;
