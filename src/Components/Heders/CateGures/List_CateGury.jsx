/* eslint-disable react/prop-types */
import { useContContext } from "../../context_data";
import styles from "../Headar.module.css";
const List_CateGury = ({ CateGures }) => {
  const { data_fetch_Geners } = useContContext();
  const handleClick = (category) => {
    data_fetch_Geners(category);
  };
  return (
    <div className={styles.list_down}>
      {" "}
      <ul>
        {CateGures.map((el, index) => {
          return (
            <li key={index} onClick={() => handleClick(el)}>
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List_CateGury;
