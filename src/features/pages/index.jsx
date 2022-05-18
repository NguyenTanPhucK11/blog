import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListAlbum from '../Albums/components';
import Post from '../Posts/components';
import PostFeature from '../Posts';
import './styles.scss';
import { Row, Col } from 'react-bootstrap';
import ListComments from '../Comments/components';

BlogPage.propTypes = {};

function BlogPage(props) {
  const [id, setId] = useState(1);
  const [url, setUrl] = useState('https://via.placeholder.com/600/92c952');
  const handleOnClick = (userID, imgUrl) => {
    setId(userID);
    setUrl(imgUrl);
  };
  return (
    <div className="blog">
      <Row>
        <Col xs={8}>
          <PostFeature id={id} imgUrl={url} />
        </Col>
        <Col>
          <h2 className="blog__h2">New Post</h2>
          <ListAlbum
            horizontal={false}
            handleOnClick={handleOnClick}
            limit={3}
          />
        </Col>
      </Row>
      <ListAlbum horizontal={true} handleOnClick={handleOnClick} limit={1} />
      <ListAlbum horizontal={true} handleOnClick={handleOnClick} limit={2} />
      <ListComments id={id} />
    </div>
  );
}

export default BlogPage;
