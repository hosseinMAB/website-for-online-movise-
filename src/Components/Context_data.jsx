/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState, useMemo } from "react";
import { createContext } from "react";
import Content_div from "./hooks/Content_div";
import Swiper_api from "./hooks/swiper_api";
import axios from "axios";
import { toast } from "react-toastify";

const DataContext = createContext({});

const Context_dataProvider = ({ children }) => {
  const [data, setDATA] = useState([]);
  const [showDATA, setSHOWdata] = useState([]);
  const DonLowde = useRef(true);
  const { active, setActive, ChingStateWedgite } = Content_div();
  const [showFILMdiv, setshowFILMdiv] = useState(true);
  const [showFILM, setshowFILM] = useState({});
  const { dataUrls } = Swiper_api();
  const isLODING = useRef(false);
  const [NEXY_BACK, setNEXT_BACK] = useState(1);

  const notify = () => {
    toast("error : proplem in server");
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

  const data_fetch = (name_film) => {
    if (!name_film.trim() && active === "search") {
      setSHOWdata([]);
    } else if (!name_film) {
      setSHOWdata(data);
    } else {
      window.scrollTo(0, 0);
      const searchTerm = name_film.toLowerCase();
      const filteredData = data.filter((el) =>
        el.original_title.toLowerCase().startsWith(searchTerm)
      );
      setSHOWdata(filteredData);
    }
  };

  // تعريف الدالة data_fetch_Geners هنا
  const data_fetch_Geners = (type_filme) => {
    const filteredData = data.filter((el) => {
      return el.genres.split(",").some((geners_shild) => {
        return geners_shild.trim().toLowerCase() === type_filme.toLowerCase();
      });
    });

    setSHOWdata(filteredData);
  };

  useEffect(() => {
    const fetchData = async () => {
      isLODING.current = true;

      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=a532603e2790b634956950594d6ccf65&language=en-US&page=${NEXY_BACK}`
        );

        if (res.data.results) {
          isLODING.current = false;
          console.log(res.data.results);

          const moviesWithGenres = res.data.results.map((movie) => ({
            ...movie,
            genres: getGenres(movie.genre_ids),
          }));
          setDATA(moviesWithGenres);
          setSHOWdata(moviesWithGenres);
        } else {
          isLODING.current = false;
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        notify();
      }
    };

    fetchData();
    DonLowde.current = false;
  }, [NEXY_BACK]);

  const moviesWithGenres = useMemo(() => {
    return data.map((movie) => ({
      ...movie,
      genres: getGenres(movie.genre_ids),
    }));
  }, [data]);

  useEffect(() => {
    setSHOWdata(moviesWithGenres);
  }, [moviesWithGenres]);

  return (
    <DataContext.Provider
      value={{
        data,
        setSHOWdata,
        showDATA,
        data_fetch,
        data_fetch_Geners,
        active,
        setActive,
        ChingStateWedgite,
        showFILM,
        setshowFILM,
        showFILMdiv,
        setshowFILMdiv,
        dataUrls,
        isLODING,
        NEXY_BACK,
        setNEXT_BACK,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default Context_dataProvider;
export const useContContext = () => {
  return useContext(DataContext);
};
