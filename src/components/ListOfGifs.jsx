import React from "react";
import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => {
  return (
    <div className="grid grid-cols-layout grid-flow-row-dense gap-4 min-h-screen">
      {gifs.map((gif) => (
        <Gif key={gif.id} {...gif} />
      ))}
    </div>
  );
};

export default ListOfGifs;
