import React from "react";
import { Link } from "wouter";

const Gif = ({ title, id, url }) => {
  return (
    <div className=" w-full">
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img src={url} alt="gif" className="w-full h-60 md:h-auto" />
      </Link>
    </div>
  );
};

export default Gif;
