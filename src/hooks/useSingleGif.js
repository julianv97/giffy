import { useState, useEffect } from "react";
import getSingleGif from "../services/getSingleGif";
import useGifs from "./useGifs";

//Este hook es para recuperar un gif en la página Detail al recargar la página
//Ya que si no se perdía y el gif quedaba en undefined
const useSingleGif = ({ id }) => {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((gif) => gif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(
    function () {
      if (!gif) {
        setIsLoading(true);
        // llamar al servicio si no tenemos gif
        getSingleGif({ id })
          .then((gif) => {
            setGif(gif);
            setIsLoading(false);
            setIsError(false);
          })
          .catch((err) => {
            setIsLoading(false);
            setIsError(true);
          });
      }
    },
    [gif, id]
  );

  return { gif, isLoading, isError };
};

export default useSingleGif;
