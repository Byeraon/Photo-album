import React from "react";
import { AlbumBlock } from "./albumBlock/albumBlock";

export const AlbumsPlace = ({ setModal, albums, filtered }) => {
  return albums.map((el) => {
    return (
      <AlbumBlock
        key={el.id}
        album={el}
        setModal={setModal}
        filtered={filtered}
      />
    );
  });
};
