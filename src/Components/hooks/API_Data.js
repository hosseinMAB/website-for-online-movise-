/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const API_Data = () => {
  const [data, setDATA] = useState([]);
  const [showDATA, setSHOWdata] = useState([]);
  const DonLowde = useRef(true);
  const getGenres = (genreIds) => {
    const genres = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      14: "Fantasy",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Science Fiction",
      10770: "TV Movie",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    return genreIds
      .map((id) => genres[id])
      .filter(Boolean)
      .join(", ");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
        );

        const moviesWithGenres = res.data.results.map((movie) => ({
          ...movie,
          genres: getGenres(movie.genre_ids),
        }));
        setDATA(moviesWithGenres);
        setSHOWdata(moviesWithGenres);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    if (DonLowde.current) {
      fetchData();
      DonLowde.current = false;
    }
  }, []);

  const data_fetch = (name_film) => {
    console.log(active);
    if (!name_film) {
      setSHOWdata(data);
    } else {
      const searchTerm = name_film.toLowerCase();
      const filteredData = data.filter((el) =>
        el.original_title.toLowerCase().startsWith(searchTerm)
      );
      setSHOWdata(filteredData);
    }
  };
  const data_fetch_Geners = (type_filme) => {
    const filteredData = data.filter((el) => {
      return el.genres.split(",").some((geners_shild) => {
        return geners_shild.trim().toLowerCase() === type_filme.toLowerCase();
      });
    });

    setSHOWdata(filteredData);
  };
  return {
    data,
    setSHOWdata,
    showDATA,
    data_fetch,
    data_fetch_Geners,
  };
};

export default API_Data;
