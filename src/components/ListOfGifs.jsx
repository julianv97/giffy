import React from "react";
import Gif from "./Gif";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ListOfGifs = ({ gifs }) => {
  return (
    <div className="">
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 1,
          550: 2,
          750: 2,
          900: 3,
          1050: 4,
          1240: 5,
        }}
      >
        <Masonry className="gap-2">
          {gifs.map((gif) => (
            <Gif key={gif.id} {...gif} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ListOfGifs;
