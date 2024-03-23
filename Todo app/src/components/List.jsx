import React from "react";
import { useState } from "react";

const List = ({ listData, deleteHandler }) => {
  const deleteItem = (idx) => {
    deleteHandler(idx);
  };
  return (
    <ul>
      {listData.map((data, idx) => {
        return (
          <li key={idx} onClick={() => deleteItem(idx)}>
            {data}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
