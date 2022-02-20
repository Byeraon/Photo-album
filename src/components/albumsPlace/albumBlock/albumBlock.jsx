import React, { useEffect, useState } from "react";
import { ContentPlace } from "../../contentPlace/contentPlace";
import style from "./albumBlock.module.css";

export const AlbumBlock = ({ setModal, album, filtered }) => {
  const [blockInfo, setInfo] = useState({ opened: false, info: null });

  const api = `https://jsonplaceholder.typicode.com/photos/?albumId=${album.id}`;

  const toggleOpen = () => {
    setInfo((prevstate) => ({ ...prevstate, opened: !prevstate.opened }));
  };

  useEffect(() => {
    if (blockInfo.opened === true && blockInfo.info === null) {
      (async () => {
        const data = await fetch(api).then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res;
          }
        });
        setInfo((prevstate) => ({ ...prevstate, info: data }));
      })();
    }
  }, [blockInfo, api]);

  return (
    !filtered.includes(album.id) && (
      <div>
        <button
          style={
            blockInfo.opened
              ? {
                  backgroundColor: "black",
                  color: "aqua",
                  border: "2px solid white",
                }
              : {}
          }
          onClick={toggleOpen}
          className={style.albumCard}
        >
          Album №{album.id} - {album.title}
        </button>
        {blockInfo.opened === true && blockInfo.info !== null && (
          <ContentPlace
            fixStyles={{
              paddingLeft: 0,
              paddingRight: 0,
              overflowY: "visible",
            }}
            fetchedData={blockInfo.info}
            setModal={setModal}
          />
        )}
      </div>
    )
  );
};
