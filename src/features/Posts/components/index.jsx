import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import './styles.scss';

Post.propTypes = {};

function Post({ body, title, imgUrl }) {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      <Container className="post">
        <Row className="d-flex justify-content-center">
          <h2>{Capitalize(title)}</h2>
          <Image style={{ padding: '16px 8px 32px 8px' }} src={imgUrl} height={400} />
          <h4>{body}</h4>
        </Row>
      </Container>
    </div>
  );
}

export default Post;
