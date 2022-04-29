import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Results from "../../components/Results";
import { useCtrlContext } from "../../hooks/useCtrlContext";

const Search = () => {
  const { searchedData, showModal } = useCtrlContext();

  return (
    searchedData && (
      <>
        <div className="h-screen">
          <Head>
            <title>Movex</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <div className=" flex flex-col my-4 mx-2 ">
            {/* <pre>{JSON.stringify(searchedMovies,null,2)}</pre> */}
            <div className="bg-neutral-900/70 rounded-lg w-full h-10 pl-10 pt-2">
              Results for : {searchedData.searchTerm}
            </div>
            <Results results={searchedData.movies} />
          </div>
          <Footer />
        </div>
        {showModal && <Modal />}
      </>
    )
  );
};

export default Search;