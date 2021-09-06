import React from "react";
import { Link } from "wouter";

//para el hover establecer 5 colores y que cada categoria se le seleccione al azar
//establecer un width más grande para los gif con títulos largos
const Gif = ({ title, id, url, isSingle }) => {
  const handleClick = () => {
    if (isSingle) {
      navigator.clipboard.writeText(url);
    }
  };
  //si está en detail ponerle un min-w
  return (
    <div className="relative pt-2 min-h-big">
      <Link to={`/gif/${id}`} onClick={handleClick}>
        <div className="absolute w-full bg-black bg-opacity-40 bottom-0">
          <h4 className="text-white">{title}</h4>
        </div>
        <img src={url} alt="gif" className="w-full h-60 min-h-big md:h-auto" />
      </Link>
    </div>
  );
};

export default Gif;
