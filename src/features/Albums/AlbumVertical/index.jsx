import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Photo from '../Photo';

AlbumVertical.propTypes = {};

function AlbumVertical({ albumId, title }) {
  return (
    <div className="vertical">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col className="vertical__img" xs={3}>
            <Photo albumId={albumId} width={70} height={70} />
          </Col>
          <Col xs={8} className="vertical__title">
            <Row> {title}</Row>
            {/* <Row>Colorful Festival</Row> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AlbumVertical;
