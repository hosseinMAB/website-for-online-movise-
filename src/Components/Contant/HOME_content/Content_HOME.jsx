import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Swiper_cart from "../../Swipers/Swiper_cart";
import "./container_hom_style.css";
import TExt_home from "./TExt_home";
import Fortter_home from "./Fortter_home";
const Content_HOME = () => {
  const [Isloding, Setisloding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      Setisloding(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container_home">
        <TExt_home />
        {Isloding && (
          <motion.Swiper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <Swiper_cart />
          </motion.Swiper>
        )}
      </div>
      <motion.Swiper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        {" "}
        <Fortter_home />
      </motion.Swiper>
    </>
  );
};

export default Content_HOME;
