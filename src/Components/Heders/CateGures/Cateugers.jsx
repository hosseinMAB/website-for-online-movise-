import styles from "../Headar.module.css";
import List_CateGury from "./List_CateGury";
import Categuures_type from "../../hooks/Categuures_type";
const Cateugers = () => {
  const { list_CateGures_1, list_CateGures_2, active_down, show_list } =
    Categuures_type();

  return (
    <>
      <div className={styles.div_Gateugers}>
        {active_down === "age" && (
          <List_CateGury CateGures={list_CateGures_1} type={active_down} />
        )}

        <p
          onClick={() => {
            show_list("age");
          }}
        >
          ageRatings
        </p>
        <div
          onClick={() => {
            show_list("");
          }}
        >
          <i
            className={`fa-solid fa-chevron-up ${
              active_down === "age" ? styles.active_li : ""
            }`}
          ></i>
        </div>
      </div>
      <div className={styles.div_Gateugers}>
        {active_down === "type" && (
          <List_CateGury CateGures={list_CateGures_2} type={active_down} />
        )}
        <p
          onClick={() => {
            show_list("type");
          }}
        >
          Genres
        </p>
        <div
          onClick={() => {
            show_list("");
          }}
        >
          <i
            className={`fa-solid fa-chevron-up ${
              active_down === "type" ? styles.active_li : ""
            }`}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Cateugers;
