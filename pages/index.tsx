import React from "react";

import Header from "../components/Header";
import Nav from "../components/atoms/Nav";
import Results from "../components/Results";
import requests from "../utils/request";
const index = ({ results }) => {
  return (
    <div>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { genera } = context.query;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genera]?.url || requests?.fetchTrending?.url
    }`
  ).then((res) => res.json());
  return {
    props: request,
  };
}

export default index;
