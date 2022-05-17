import React from 'react';
import AlbumVertical from '../AlbumVertical';
import AlbumHorizontal from '../AlbumHorizontal';
import './styles.scss';

ListAlbum.propTypes = {};

function ListAlbum({ horizontal }) {
  const imgUrl = 'https://mdbootstrap.com/img/new/slides/041.webp';
  const listAlbum = [
    { id: 0, title: 'NONE', imgUrl: imgUrl },
    { id: 1, title: 'NONE', imgUrl: imgUrl },
    { id: 2, title: 'NONE', imgUrl: imgUrl },
    { id: 3, title: 'NONE', imgUrl: imgUrl },
    { id: 4, title: 'NONE', imgUrl: imgUrl },
  ];
  if (horizontal) {
    return (
      <>
        <h1></h1>
        <ul className="list-album">
          {listAlbum.map((album) => (
            <AlbumHorizontal
              key={'albumHor-' + album.id}
              title={album.title + '-' + album.id}
              imgUrl={album.imgUrl}
            />
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <ul className="">
        {listAlbum.map((album) => (
          <AlbumVertical
            key={'albumVer-' + album.id}
            title={album.title + '-' + album.id}
            imgUrl={album.imgUrl}
          />
        ))}
      </ul>
    );
  }
}

export default ListAlbum;
