import React, { useState } from "react";
import style from "./lazyImage.module.css";

export const LazyImage = ({ image, name, id }) => {
  const [isLoaded, setLoad] = useState(false);
  return (
    <>
      <img
        alt={name}
        style={isLoaded ? {} : { display: "none" }}
        className={style.image}
        onLoad={() => {
          setLoad(true);
        }}
        src={image}
      ></img>

      {!isLoaded && (
        <div className={style.skelet}>
          <div className={style.line}></div>
        </div>
      )}
    </>
  );
};
