import React from "react";
import style from "./pagination.module.css";

export const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  let items = [];
  let leftSide = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage + 2;
  if (rightSide > pages) rightSide = pages;
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number}
        className={
          number === currentPage
            ? style.roundEffect + " " + style.active
            : style.roundEffect
        }
        onClick={() => {
          setCurrentPage(number);
        }}
      >
        {number}
      </div>
    );
  }
  const nextPage = () => {
    if (currentPage < pages) {
      setCurrentPage((prevstate) => prevstate + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevstate) => prevstate - 1);
    }
  };

  return (
    <div className={style.flexContainer}>
      {pages && (
        <div className={style.paginateCtn}>
          <div className={style.roundEffect} onClick={prevPage}>
            &lsaquo;
          </div>
          {items}
          <div className={style.roundEffect} onClick={nextPage}>
            &rsaquo;
          </div>
        </div>
      )}
    </div>
  );
};
