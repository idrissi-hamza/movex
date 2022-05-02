import React from "react";
import SingleResult from "./SingleResult";

const Results = ({ results }) => {
  return (
    <div className=" px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center min-h-full">
      {results.map((result) => (
        <SingleResult  key={result.id} result={result}/>
        
      ))}
    </div>
  );
};

export default Results;
