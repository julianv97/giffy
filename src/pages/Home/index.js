import React, { useState } from "react";
import { useLocation } from "wouter";
import useGifs from "../../hooks/useGifs";

import ListOfGifs from "../../components/ListOfGifs";
import { LazyTrending } from "../../components/TrendingSearch/LazyTrendingSearches";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [path, pushLocation] = useLocation();

  // eslint-disable-next-line no-unused-vars
  const { loading, gifs } = useGifs();

  const handleSubmit = (e) => {
    e.preventDefault();
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="">
      {/* Formik para cambiar keyword */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          className="bg-gray-300"
        />
      </form>
      <div className="">
        <div>
          <h3>Ultima Busqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <LazyTrending />
      </div>
    </div>
  );
};

export default Home;
