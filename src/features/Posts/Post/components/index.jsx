import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './styles.scss';

Post.propTypes = {};

function Post({ id, imgUrl }) {
  return (
    <div>
      <Container className="post">
        <Row className="d-flex justify-content-center">
          <Image src={imgUrl} height={400} />
          {/* <Col>Travel {id}</Col> */}
          {/* <Col>Colorful Festival</Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Post;
