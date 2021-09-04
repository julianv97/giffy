import { useContext } from "react";
import GifsContext from "../context/GifsContext";

//Este hook es para leer los gifs del context desde cualquier componente
const useGlobalGifs = () => {
  const { gifs } = useContext(GifsContext);
  return gifs;
};

export default useGlobalGifs;
