/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Swiper_api = () => {
  const urls = ["popular", "top_rated", "upcoming"];
  const [dataUrls, setDataUrls] = useState([[], [], []]); // مصفوفة لتخزين البيانات
  const issounlod = useRef(true);
  const apiUrl = (url) =>
    `https://api.themoviedb.org/3/movie/${url}?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTMyNjAzZTI3OTBiNjM0OTU2OTUwNTk0ZDZjY2Y2NSIsIm5iZiI6MTc0MDMxMzc2NS4yOTMsInN1YiI6IjY3YmIxNGE1ZWZmZWI5NmU5ZTBhYWQ5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hOAnOoZQJl0IQbzCNJ-gDYV4lAUxeisbas71COjh5Dk",
    },
  };

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
      const results = await Promise.all(
        urls.map(async (url) => {
          try {
            const res = await axios.get(apiUrl(url), options);
            return res.data.results.map((movie) => ({
              ...movie,
              genres: getGenres(movie.genre_ids),
            }));
          } catch (error) {
            console.error("Error fetching data: ", error);
            return [];
          }
        })
      );
      setDataUrls(results);
    };
    if (issounlod.current) {
      issounlod.current = false;
      fetchData();
    }
  }, []);

  return { dataUrls };
};

export default Swiper_api;
