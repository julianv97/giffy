import React from "react";
import { Link } from "wouter";
//establecer 5 colores y que cada categoria se le seleccione al azar

const Category = ({ name, options = [] }) => {
  return (
    <div className="text-white ">
      <h3>{name}</h3>
      <ul>
        {options.map((option) => {
          return (
            <li key={option} className="inline-block md:block pr-2">
              <Link to={`/search/${option}`}>{option}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
