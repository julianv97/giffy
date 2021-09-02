import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

const ListOfGifs = ({ params }) => {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword, setLoading]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      {gifs.map((gif) => (
        <Gif key={gif.id} {...gif} />
      ))}
    </>
  );
};

export default ListOfGifs;
