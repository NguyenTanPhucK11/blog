import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Image } from 'react-bootstrap';

Photo.propTypes = {};

function Photo({ albumId, width, height, photoOnClick }) {
  const initPhoto = useSelector((state) => state.photo);

  const handleOnClickImg = (id, imgUrl) => {
    if (!photoOnClick) return;
    photoOnClick(id, imgUrl);
  };

  const imgUrl =
    albumId === undefined ? initPhoto[0].url : initPhoto[albumId - 1].url;
  return (
    <div>
      <Image
        src={imgUrl}
        width={width}
        height={height}
        onClick={() => handleOnClickImg(albumId, imgUrl)}
      />
    </div>
  );
}

export default Photo;
