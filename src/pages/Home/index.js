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
    <div className="bg-purple-back h-full min-h-screen">
      {/* Formik para cambiar keyword */}
      <form onSubmit={handleSubmit} className="text-white">
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          className="bg-gray-300"
        />
      </form>
      <div className="flex flex-col md:flex-row bg-purple-back h-full min-h-screen">
        <div className="flex-grow bg-purple-back h-full min-h-screen">
          <h3 className="text-white">Ultima Busqueda</h3>
          {<ListOfGifs gifs={gifs} />}
        </div>
        <LazyTrending />
      </div>
    </div>
  );
};

export default Home;
