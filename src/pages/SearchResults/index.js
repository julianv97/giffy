import React from "react";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h3>{decodeURI(keyword)}</h3>
          {<ListOfGifs gifs={gifs} />}
        </>
      )}
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
};

export default SearchResults;
