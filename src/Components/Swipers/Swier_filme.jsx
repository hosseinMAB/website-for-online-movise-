import styles from "./swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { useContContext } from "../context_data";

const Swier_filme = () => {
  const { dataUrls, setshowFILM, setshowFILMdiv } = useContContext();

  const handleCardClick = (film) => {
    setshowFILM(film);
    setshowFILMdiv(false);
  };

  const ap_name_swiper = ["POPular", "TOP rated", "UPcoming"];
  return (
    <>
      <div className="container_swiper">
        {dataUrls.map((url, index) => {
          const name_swiper = ap_name_swiper[index];
          return (
            <Swiper
              key={index}
              slidesPerView={5}
              spaceBetween={15}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <div className="ap_name_swiper">{name_swiper}</div>

              {url.map((el, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    onClick={() => {
                      handleCardClick(el);
                    }}
                  >
                    <div className="swiper_reait">
                      {el.vote_average.toFixed(1)}
                    </div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                      alt={`Poster of ${el.original_title}`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          );
        })}
      </div>
    </>
  );
};
export default Swier_filme;
