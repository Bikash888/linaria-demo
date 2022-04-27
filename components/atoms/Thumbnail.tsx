import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

const Thumbnail = ({ result }) => {
  const imageBasePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className="p-2 wd-200 group cursor-pointer  transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 3">
      <Image
        height={1080}
        width={1920}
        layout="responsive"
        src={imageBasePath + result?.backdrop_path || result?.poster_path}
      />
      <div className="p-2">
        <p className="truncate max-w-sm lg:max-w-lg">{result?.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result?.title || result?.original_name}
        </h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result?.media_type && `${result?.media_type}`}
          {result?.release_date && result?.release_date}
          <ThumbUpIcon className="h-5 mx-2" />
          {result?.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
