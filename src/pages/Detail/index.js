import React from "react";
import useGlobalGifs from "../../hooks/useGlobalGifs";
import Gif from "../../components/Gif";

const Detail = ({ params }) => {
  const gifs = useGlobalGifs();

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  return <Gif {...gif} />;
};

export default Detail;
