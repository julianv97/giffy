import React, { useEffect, useState } from "react";
import getTrendingSearchs from "../../services/getTrendingSearchs";
import Category from "../Category";

const TrendigSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingSearchs().then(setTrends);
  }, []);

  return (
    <div>
      <Category options={trends} name="Trending" />
    </div>
  );
};

export default TrendigSearches;
