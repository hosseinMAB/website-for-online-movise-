import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./container_hom_style.css";

const TypingText = () => {
  const [displayedText, setDisplayedText] = useState("");
  const text1 = "m ovie free";

  const text2 =
    "The Movie Free website offers the best movies with excellent quality and for free. All you have to do is join our family to spend the best times with us.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text1.charAt(index));
      index++;
      if (index === text1.length) {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className="container_text">
          {displayedText.split("").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0 }}
            >
              <h1 className="h1_text">{word} </h1>
            </motion.span>
          ))}
        </div>

        <div>
          <div className="quote_container">
            {text2.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TypingText;
