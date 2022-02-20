import React from "react";
import { Card } from "../../UI components/card/card";

export const ContentPlace = ({ fetchedData, setModal, fixStyles }) => {
  return (
    <main style={fixStyles || {}}>
      {fetchedData.map((el) => (
        <Card key={el.id} el={el} setModal={setModal} />
      ))}
    </main>
  );
};
