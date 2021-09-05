import React from "react";
import Gif from "./Gif";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ListOfGifs = ({ gifs }) => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 550: 2, 750: 2, 900: 3, 1050: 4 }}
    >
      <Masonry className="gap-4">
        {gifs.map((gif) => (
          <Gif key={gif.id} {...gif} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default ListOfGifs;
