import React from "react";
import { LazyImage } from "../lazyImage/lazyImage";
import style from "./card.module.css";

export const Card = ({ el, setModal }) => {
  const openModal = () => {
    setModal(el);
  };

  return (
    <div onClick={openModal} className={style.card}>
      <LazyImage id={el.id} image={el.thumbnailUrl} name={el.title} />
      <div className={style.infoBlock}>
        <p className={style.name}>{el.title}</p>
      </div>
    </div>
  );
};
