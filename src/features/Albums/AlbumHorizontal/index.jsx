import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';

AlbumHorizontal.propTypes = {};

function AlbumHorizontal({ title, imgUrl }) {
  return (
    <div className="horizontal">
      <Container>
        <Col>
          <Image src={imgUrl} width={150} height={150} />
          <Col>{title}</Col>
        </Col>
      </Container>
    </div>
  );
}

export default AlbumHorizontal;
