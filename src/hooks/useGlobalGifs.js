import { useContext } from "react";
import GifsContext from "../context/GifsContext";
//Este hook es para leer los gifs del contexto global
export default function useGlobalGifs() {
  return useContext(GifsContext).gifs;
}
