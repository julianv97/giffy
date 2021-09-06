import React from "react";
import { Link } from "wouter";

const categotyStyles = [
  "bg-brand-red text-white",
  "bg-brand-blue text-black",
  "bg-brand-green text-black",
  "bg-brand-purple text-white",
  "bg-brand-yellow text-black",
];

const Category = ({ name, options = [] }) => {
  return (
    <div className=" lg:flex lg:flex-col ">
      <h3 className="text-white text-xl md:text-3xl">{name}</h3>
      <ul>
        {options.map((option) => {
          return (
            <li key={option} className="inline-block md:block mx-1 my-2 lg:m-3">
              <Link
                to={`/search/${option}`}
                className={`${
                  categotyStyles[
                    Math.floor(Math.random() * categotyStyles.length)
                  ]
                } p-1`}
              >
                {option}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;

/* inline-block md:block mt-2 pr-2  */
