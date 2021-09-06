import debounce from "just-debounce-it";
import React, { useRef, useEffect, useCallback } from "react";

import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";
import useNearScreen from "../../hooks/useNearScreen";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  // eslint-disable-next-line
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);

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
          <div id="visor" ref={externalRef}></div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
