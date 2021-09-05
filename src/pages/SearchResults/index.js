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
    <div className="">
      {loading ? (
        <div className="">
          <h1 className="text-white">Loading...</h1>
        </div>
      ) : (
        <div className="">
          <h3 className="text-white">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </div>
      )}
      <button onClick={handleNextPage} className="w-full bg-purple-back ">
        Next Page
      </button>
    </div>
  );
};

export default SearchResults;
