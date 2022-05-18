import React, { useState, useEffect } from 'react';
import AlbumVertical from '../AlbumVertical';
import AlbumHorizontal from '../AlbumHorizontal';
import { useSelector } from 'react-redux';
import './styles.scss';

ListAlbum.propTypes = {};

function ListAlbum({ horizontal, handleOnClick, limit }) {
  const initListAlbum = useSelector((state) => state.album);
  const [albumList, setAlbumList] = useState(initListAlbum);

  const handleAlbumOnClick = (id, imgUrl) => {
    if (!handleOnClick) return;
    handleOnClick(id, imgUrl);
  };

  useEffect(() => {
    async function fetchAlbumList() {
      const requestUrl = 'https://jsonplaceholder.typicode.com/albums';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json(response);

      setAlbumList(responseJSON.filter((data) => data.userId === limit));
    }
    fetchAlbumList();
  }, []);

  if (horizontal) {
    return (
      <ul className="album-horizontal">
        <h2>CATEGORY</h2>
        <div>
          {albumList.map((album) => (
            <AlbumHorizontal
              key={'albumHor-' + album.id}
              title={album.title}
              albumId={album.id}
              albumOnCick={handleAlbumOnClick}
            />
          ))}
        </div>
      </ul>
    );
  } else {
    return (
      <ul className="album-vertical">
        {albumList.map((album) => (
          <AlbumVertical
            key={'albumVer-' + album.id}
            title={album.title}
            albumId={album.id}
            albumOnCick={handleAlbumOnClick}
          />
        ))}
      </ul>
    );
  }
}

export default ListAlbum;
