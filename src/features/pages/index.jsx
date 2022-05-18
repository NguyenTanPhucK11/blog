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
  return (
    <div className="blog">
      <Row>
        <Col xs={8}>
          <PostFeature />
        </Col>
        <Col>
          <ListAlbum horizontal={false} />
        </Col>
      </Row>
      Posts
      <ListAlbum horizontal={true} />
      Comment
      <ListComments />
    </div>
  );
}

export default BlogPage;
