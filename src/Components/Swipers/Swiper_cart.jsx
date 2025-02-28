import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./style_cart.css";
import { EffectCards, Autoplay } from "swiper/modules";
import { useContContext } from "../context_data";
import { useRef } from "react";

const Swiper_cart = () => {
  const { data, setshowFILM, setshowFILMdiv } = useContContext();
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };
  const handleCardClick = (film) => {
    setshowFILM(film);
    setshowFILMdiv(false);
  };
  return (
    <div className="container_swip">
      <Swiper
        onInit={(swiper) => {
          swiperRef.current = swiper;
        }} // حفظ الـ swiper instance في المرجع
        effect={"cards"}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        className="mySwiper"
      >
        {data.map((el, index) => {
          return (
            <SwiperSlide
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                handleCardClick(el);
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Swiper_cart;
