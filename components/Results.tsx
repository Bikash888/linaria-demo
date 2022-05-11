import Image from "next/image";
import React from "react";
import Thumbnail from "./atoms/Thumbnail";

const Results = ({ results }) => {
  return (
    <div className=" px-4  my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results?.map((result) => (
        <Thumbnail key={result?.id} result={result} />
      ))}
      <Image
        alt="asjhdbasjh"
        src="/graph.jpg"
        height="500"
        width="300"
        layout="responsive"
      />
    </div>
  );
};

export default Results;
