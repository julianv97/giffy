import React from "react";
import Gif from "../../components/Gif";
import useSingleGif from "../../hooks/useSingleGif";

const Detail = ({ params }) => {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isLoading) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }

  if (isError) return <h3>Error</h3>;

  if (!gif) return <h3>No existe el gif</h3>;

  return (
    <div className="h-full min-h-screen flex flex-col justify-center items-center ">
      <h3 className="text-white">{gif ? gif.title : "No Title"}</h3>
      <Gif {...gif} isSingle={true} />
    </div>
  );
};

export default Detail;
