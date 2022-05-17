import React from 'react';
import PropTypes from 'prop-types';
import ListAlbum from '../Albums/components';
import Post from '../Posts/Post/components';
import PostFeature from '../Posts/Post';
import './styles.scss'
import { Row, Col } from 'react-bootstrap';

BlogPage.propTypes = {};

function BlogPage(props) {
  return (
    <div className="blog">
      <Row >
        <Col xs={8}>
          <PostFeature />
        </Col>
        <Col>
          <ListAlbum horizontal={false} />
        </Col>
      </Row>
      Posts
      <ListAlbum horizontal={true} />
    </div>
  );
}

export default BlogPage;
