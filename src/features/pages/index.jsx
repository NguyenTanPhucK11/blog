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
          <ListAlbum horizontal={false} handleOnClick={handleOnClick} />
        </Col>
      </Row>
      Posts
      <ListAlbum horizontal={true} handleOnClick={handleOnClick} />
      Comment
      <ListComments  id= {id}/>
    </div>
  );
}

export default BlogPage;
