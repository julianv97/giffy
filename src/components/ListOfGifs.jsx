import React from "react";
import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => {
  return (
    <>
      {gifs.map((gif) => (
        <Gif key={gif.id} {...gif} />
      ))}
    </>
  );
};

export default ListOfGifs;
