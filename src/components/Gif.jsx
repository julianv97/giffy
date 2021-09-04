import React from "react";
import { Link } from "wouter";

const Gif = ({ title, id, url }) => {
  return (
    <div className="w-40">
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img loading="lazy" src={url} alt="gif" className="w-20 h-20" />
      </Link>
    </div>
  );
};

export default Gif;
