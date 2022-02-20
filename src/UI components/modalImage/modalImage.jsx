import React, { useState } from "react";
import { LazyImage } from "../lazyImage/lazyImage";

import style from "./modalImage.module.css";

export const ModalImage = ({ element, setModal }) => {
  const [isClosed, setClose] = useState(false);

  const transitionWrapper = () => {
    setClose(true);
  };

  const closeModal = () => {
    if (isClosed) {
      setModal({ opened: false, element: null });
    }
  };

  return (
    <div
      onAnimationEnd={closeModal}
      className={style.modalWrapper.concat(
        isClosed ? " " + style.closeModal : ""
      )}
    >
      <div className={style.modalBlock}>
        <button
          onClick={transitionWrapper}
          className={style.crossClose}
        ></button>
        <LazyImage image={element.url} name={element.title} id={element.id} />
        <p className={style.title}>{element.title}</p>
        <p className={style.stats}>AlbumId: {element.albumId}</p>
      </div>
    </div>
  );
};
