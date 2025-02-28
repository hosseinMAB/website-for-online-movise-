import { useContContext } from "../context_data";
import styles from "./Filme_Div.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const Select_filme = () => {
  const { showFILM, setshowFILMdiv } = useContContext();
  const [videoKey, setVideoKey] = useState(null);
  const [Vedio, SETvidio] = useState(false);
  const handelVidio = () => {
    SETvidio(true);
  };
  const handelBackShowFilme = () => {
    setshowFILMdiv(true);
  };
  const notify = (film) => {
    if (film.video === false) {
      toast("غير متوفر حاليا", {
        className: ".Toastify--error",
        bodyClassName: "customBodyClass",
        position: "top-center",
        autoClose: 10000,
        closeOnClick: true,
      });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${showFILM.id}/videos?api_key=a532603e2790b634956950594d6ccf65&language=en-US`
        );

        if (res.data.results.length > 0) {
          // تأكد من وجود النتائج
          const videoKeyy = res.data.results[0].key;
          const videoURL = `https://www.youtube.com/watch?v=${videoKeyy}`;
          setVideoKey(videoKeyy);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [showFILM]);

  return (
    <div className={styles.container_selectFilme}>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 10 }}
      >
        {" "}
        <div className={styles.selectedFilmCard}>
          <div className={styles.button}>
            <div className={styles.div_icon} onClick={handelBackShowFilme}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div
              className={styles.div_icon}
              onClick={() => {
                handelVidio();
              }}
            >
              <i className="fa fa-video"></i>
            </div>
            <div
              className={styles.div_icon}
              onClick={() => {
                notify(showFILM);
              }}
            >
              <i className="fa fa-download"></i>
            </div>
          </div>

          <div className={styles.container_dev}>
            {Vedio && (
              <div className={styles.selectedPoster}>
                {videoKey && (
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoKey}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            )}
            {!Vedio && (
              <div className={styles.selectedPoster}>
                {" "}
                <img
                  src={`https://image.tmdb.org/t/p/w500${showFILM.backdrop_path}`}
                  alt=""
                />
              </div>
            )}
            <div className={styles.selectedDetails}>
              <h4 className={styles.selectedTitle}>
                {showFILM.original_title}
              </h4>
              <div className={styles.selectedGenre}>
                <span>نوع:</span> {showFILM.genres}
              </div>
              <div className={styles.selectedRating}>
                <span>تقييم : </span>
                {showFILM.vote_average}
              </div>
              <div className={styles.selectedReleaseDate}>
                <span>تاريخ الاصدار : </span>
                {showFILM.release_date}
              </div>
              <div className={styles.selectoverview}>{showFILM.overview}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Select_filme;
