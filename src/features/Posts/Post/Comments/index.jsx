import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

Comment.propTypes = {};

function Comment(props) {
  return (
    <div>
      <Form action="">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Comment as</Form.Label>
          <Form.Control type="input" placeholder="Comment" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Comment;
