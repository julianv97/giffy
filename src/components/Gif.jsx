import React from "react";
import { Link } from "wouter";

const categotyStyles = [
  "hover:border-brand-red",
  "hover:border-brand-blue",
  "hover:border-brand-green",
  "hover:border-brand-purple",
  "hover:border-brand-yellow",
];

const Gif = ({ title, id, url, isSingle }) => {
  const handleClick = () => {
    if (isSingle) {
      navigator.clipboard.writeText(url);
    }
  };
  return (
    <div
      className={`${
        categotyStyles[Math.floor(Math.random() * categotyStyles.length)]
      } relative min-h-big min-w-big border-4 border-transparent`}
    >
      <Link to={`/gif/${id}`} onClick={handleClick}>
        <div className="absolute w-full bg-black bg-opacity-40 bottom-0 border-transparent">
          <h4 className="text-white pl-1 border-transparent">{title}</h4>
        </div>
        <img
          src={url}
          alt="gif"
          className="w-full h-60 min-h-big md:h-auto object-cover"
        />
      </Link>
    </div>
  );
};

export default Gif;

