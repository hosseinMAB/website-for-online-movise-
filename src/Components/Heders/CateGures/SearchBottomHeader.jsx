/* eslint-disable react/prop-types */

import { useContContext } from "../../context_data";
import styles from "../Headar.module.css";
const SearchBottomHeader = () => {
  const { data_fetch } = useContContext();

  return (
    <>
      <div className={styles.Serching}>
        <input
          type="text"
          onChange={(e) => {
            data_fetch(e.target.value);
          }}
        />
        <div>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};

export default SearchBottomHeader;
