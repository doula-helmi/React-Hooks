import "./App.css";
import React, { useState } from "react";
import AddMovie from "./Components/AddMovie";
import { MovieList } from "./Components/MovieList";
import { Filter } from "./Components/Filter";
import { Data } from "./Components/Data";
import { useRef } from "react";
const App = () => {
  const [List, setList] = useState(Data);

  const [FiltreBysearch, setFiltreBysearch] = useState("");
  const getSearch = (data) => {
    setFiltreBysearch(data);
  };

 
  const [Newrate, setNewrate] = useState();
  const getNewrate = (data) => {
    setNewrate(data);
  };

  const [FiltreByRate, setFiltreByRate] = useState(5);
  const getRate = (rate) => {
    setFiltreByRate(rate);
  };


  const [NewTitle, setNewTtile] = useState();

  const getNewTtile = (data) => {
    setNewTtile(data);
  };

  const [newPostURL, setnewPostURL] = useState();

  const getNewPostURL=(data)=>{
    setnewPostURL(data); 
  }


  const [newDescription, setnewDescription] = useState("");

  const getnewDescription=(data)=>{
    setnewDescription(data); 
  }


console.log(FiltreByRate)
  const AddNewMovie = () => {
    setList([
      {
        id: Math.random(),
        title: NewTitle,
        description: newDescription,
        posterURL: newPostURL,
        rating: Newrate,
      },
      ...List,
    ]);

  };

  return (
    <>
      <Filter onSubmit={getSearch} onsearch={getRate} />
      <AddMovie
        list={List}
        submitMovie={AddNewMovie}
        sendMovieRate={getNewrate}
        sendMovieTitle={getNewTtile}
        senMoviePostURL={getNewPostURL}
        senmoviePosterURL={getnewDescription}
      />
      <MovieList
        list={List}
        searchString={FiltreBysearch}
        rateValue={FiltreByRate}
      />
    </>
  );
};

export default App;
