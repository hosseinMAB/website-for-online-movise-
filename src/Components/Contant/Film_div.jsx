import { useContContext } from "../context_data";
import styles from "./Filme_Div.module.css";
import { motion } from "framer-motion";

const Film_div = () => {
  const { showDATA, setshowFILM, setshowFILMdiv } = useContContext();

  const handleCardClick = (film) => {
    setshowFILM(film);
    setshowFILMdiv(false);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        <div className={styles.moviecontainer}>
          {showDATA.map((el, index) => {
            return (
              <div
                className={styles.moviecard}
                key={index}
                onClick={() => handleCardClick(el)}
              >
                <div className={styles.movieposter}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                    alt={`Poster of ${el.original_title}`}
                  />
                </div>

                <div className={styles.movietitle}>{el.original_title}</div>

                <div className={styles.moviedetails}>
                  <div className={styles.moviegenre}>
                    <span>نوع:</span> {el.genres}
                  </div>
                  <div className={styles.movierating}>
                    <span>تقييم : </span>
                    {el.vote_average}
                  </div>
                  <div className={styles.moviereleasedate}>
                    <span>تاريخ الاصدار : </span>
                    {el.release_date}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Film_div;
