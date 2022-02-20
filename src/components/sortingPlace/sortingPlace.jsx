import React from "react";
import { FilterBlock } from "./filterBlock/filterBlock";
import style from "./sortingPlace.module.css";

export const SortingPlace = ({
  sorted,
  setSort,
  filtered,
  albums,
  setFilter,
  filterAll,
}) => {
  const sortHandler = () => {
    setSort((prevstate) => !prevstate);
  };

  return (
    <div className={style.sortWrapper}>
      <p>Sorting and filtering</p>
      <button
        onClick={sortHandler}
        style={
          sorted
            ? {
                backgroundColor: "black",
                color: "aqua",
                border: "2px solid white",
              }
            : {}
        }
      >
        Sort by albums
      </button>

      <FilterBlock
        sorted={sorted}
        filtered={filtered}
        albums={albums}
        setFilter={setFilter}
        filterAll={filterAll}
      />
    </div>
  );
};
