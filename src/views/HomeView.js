import React, { useEffect, useReducer } from "react";
import axios from "axios";
import Search from "../components/Search/Search";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import Loading from "../components/Loading/Loading";
import MoviesList from "../components/Movies/MoviesList";
import { reducer, initialState } from "../reducer/reducer";
import API from "../config/api";
import { apiKey } from "../config/apikey";
import { SEARCH_MOVIES_FAILED, SEARCH_MOVIES_SUCCESS } from "../reducer/types";
import "./style.css";

const HomeView = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, errorMessage, loading } = state;

  const handleMovieSearch = (movie) => {
    API.get(`?s=${movie}&${apiKey}`).then((res) => {
      console.log(res.data);

      if (res.data.Response === "True") {
        dispatch({
          type: SEARCH_MOVIES_SUCCESS,
          payload: res.data.Search,
        });
      } else {
        dispatch({
          type: SEARCH_MOVIES_FAILED,
          payload: res.data.Error,
        });
      }
    });
  };

  // useEffect(() => {
  //   handleMovieSearch("batman");
  // }, []);

  return (
    <div id="main-style">
      <Search onSubmit={handleMovieSearch} />
      <div>
        {loading && !errorMessage ? (
          <Loading />
        ) : errorMessage ? (
          <ErrorMsg>{errorMessage}</ErrorMsg>
        ) : (
          <MoviesList movies={movies} />
        )}
      </div>
    </div>
  );
};

export default HomeView;
