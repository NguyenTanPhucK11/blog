import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Comment from '../comments';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import { addNewComment } from '../reducers/commentSlice';

ListComments.propTypes = {};

function ListComments({ id }) {
  const listComments = useSelector((state) => state.comment);
  const [commentList, setCommentList] = useState(listComments);
  const [addComment, setAddComment] = useState('');
  const dispatch = useDispatch();

  const handleClickSubmit = (e) => {
    e.preventDefault();
    const newComment = [...commentList];
    const initNewComment = {
      postId: 1,
      id: newComment.length + 1,
      //   name: '123',
      email: 'Peter@.tv',
      body: addComment,
    };
    newComment.push(initNewComment);
    dispatch(addNewComment(initNewComment));
    setCommentList(newComment);

    setAddComment('');
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setAddComment(e.target.value);
  };

  useEffect(() => {
    async function fetchCommentList() {
      const requestUrl =
        'https://jsonplaceholder.typicode.com/posts/' + id + '/comments';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json(response);
      setCommentList(responseJSON);
    }
    fetchCommentList();

    async function pushCommentList() {
      const requestUrl = 'https://jsonplaceholder.typicode.com/posts';
      const pushData = await fetch(requestUrl, {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const responseJSON = await pushData.json(pushData);
    }
    pushCommentList();
  }, [id]);
  return (
    <ul>
      <h2>COMMENT</h2>
      {commentList.map((comment) => (
        <Comment {...comment} key={'comment-' + comment.id}></Comment>
      ))}
      <Form style={{ textAlign: 'center' }}>
        <InputGroup style={{ paddingBottom: '10px' }}>
          <FormControl
            value={addComment}
            placeholder="...comment"
            aria-label="comment"
            aria-describedby="basic-addon1"
            onChange={handleOnChange}
          />
        </InputGroup>
        <Button onClick={handleClickSubmit}>Submit</Button>
      </Form>
    </ul>
  );
}

export default ListComments;
