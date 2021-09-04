import React, { useEffect, useState } from "react";
import getTrendingSearchs from "../services/getTrendingSearchs";
import Category from "./Category";

 const TrendigSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingSearchs().then(setTrends);
  }, []);

  return (
    <div>
      <Category options={trends} name="Tendencias" />
    </div>
  );
};

export default TrendigSearches

export const LazyTrending = () => {
  const [show, setShow] = useState(false);

  const onChange = (entries) => {
    const el = entries[0];
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });

    observer.observe(document.getElementById("lazy-trending"));
  });

  return <div id="lazy-trending">{show ? <TrendigSearches /> : null}</div>;
};
