import { useEffect, useState } from "react";
import { useContContext } from "../context_data";
import Swier_filme from "../Swipers/Swier_filme";
import Film_div from "./Film_div";
import Content_HOME from "./HOME_content/Content_HOME";
import Select_filme from "./Select_filme";
import { GridLoader } from "react-spinners";
import styles from "./Filme_Div.module.css";
import Foter_film_div from "./foter_film_div";
const Contant_show = () => {
  const { active, showFILMdiv } = useContContext();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (active === "moves") {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer); // تنظيف المؤقت عند إلغاء التركيب
    }
  }, [active]);

  return (
    <>
      {active === "moves" && isLoading && (
        <div className={styles.loader}>
          <GridLoader color="white" />
        </div>
      )}

      {active === "search" && showFILMdiv && <Film_div />}
      {active === "moves" && !isLoading && showFILMdiv && <Film_div />}
      {active === "moves" && !isLoading && showFILMdiv && <Foter_film_div />}

      {!showFILMdiv && <Select_filme />}
      {active == "search" && showFILMdiv ? <Swier_filme /> : ""}
      {active == "home" && showFILMdiv && <Content_HOME />}
    </>
  );
};

export default Contant_show;
