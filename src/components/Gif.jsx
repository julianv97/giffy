import React from "react";
import { Link } from "wouter";

const Gif = ({ title, id, url }) => {
  return (
    <div className="w-56">
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img src={url} alt="gif" className="w-56 h-56" />
      </Link>
    </div>
  );
};

export default Gif;
