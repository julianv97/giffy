import React from "react";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h3>{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
    </div>
  );
};

export default SearchResults;
