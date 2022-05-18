import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Photo from '../Photo';

AlbumHorizontal.propTypes = {};

function AlbumHorizontal({ title, albumId, albumOnCick }) {
  const photoOnClick = (id, imgUrl) => {
    if (!albumOnCick) return;
    albumOnCick(id, imgUrl);
  };
  return (
    <div className="horizontal">
      <Container>
        <Col>
          <Photo
            photoOnClick={photoOnClick}
            albumId={albumId}
            width={150}
            height={150}
          />
          <Col>{title}</Col>
        </Col>
      </Container>
    </div>
  );
}

export default AlbumHorizontal;
