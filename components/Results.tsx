import React from "react";
import Thumbnail from "./atoms/Thumbnail";

const Results = ({ results }) => {
  return (
    <div className=" px-4  my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results?.map((result) => (
        <Thumbnail key={result?.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
