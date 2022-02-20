import React, { useEffect, useState } from "react";
import style from "./filterBlock.module.css";

export const FilterBlock = ({
  filtered,
  albums,
  setFilter,
  filterAll,
  sorted,
}) => {
  const [isOpened, setOpen] = useState(false);

  useEffect(() => {
    if (!sorted) {
      setOpen(false);
    }
  }, [sorted]);

  const toggleOpen = () => {
    setOpen((prevstate) => !prevstate);
  };
  return (
    <div className={style.sortWrapper}>
      <button
        disabled={!sorted}
        onClick={toggleOpen}
        style={
          isOpened
            ? {
                backgroundColor: "black",
                color: "aqua",
                border: "2px solid white",
              }
            : {}
        }
      >
        Filtering
      </button>
      {isOpened && (
        <div className={style.albumsBlock}>
          <button onClick={filterAll}>FILTER ALL</button>
          {albums.map((el) => (
            <button
              onClick={() => setFilter(el.id)}
              key={el.id}
              style={
                filtered.includes(el.id)
                  ? {
                      backgroundColor: "black",
                      color: "rgb(237, 255, 75)",
                      border: "2px solid white",
                    }
                  : {}
              }
              className={style.filterOption}
            >
              №{el.id} - {el.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
