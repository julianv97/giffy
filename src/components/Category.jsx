import React from "react";
import { Link } from "wouter";

const Category = ({ name, options = [] }) => {
  return (
    <div>
        <h3>
            {name}
        </h3>
      <ul>
        {options.map((option) => {
          return (
            <li key={option}>
              <Link to={`/search/${option}`}>{option}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
