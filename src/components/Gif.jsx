import React from "react";

const Gif = ({ title, id, url }) => {
  return (
    <a href={`#${id}`}>
      <h4>{title}</h4>
      <img src={url} alt="gif" />
    </a>
  );
};

export default Gif;
