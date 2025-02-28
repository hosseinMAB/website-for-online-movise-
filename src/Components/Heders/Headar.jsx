/* eslint-disable react/prop-types */
import styles from "./Headar.module.css";
import "@fortawesome/fontawesome-free/css/all.css";
import SearchBottomHeader from "./CateGures/SearchBottomHeader";
import Cateugers from "./CateGures/Cateugers";
import { useContContext } from "../context_data";
import { useEffect } from "react";
const Headar = ({ onFormChange }) => {
  const {
    data,
    setSHOWdata,
    active,
    ChingStateWedgite,
    showFILMdiv,
    data_fetch,
  } = useContContext();
  useEffect(() => {
    active == "search" && data_fetch("undefined");
    active == "moves" && setSHOWdata(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <>
      {" "}
      <header>
        <div className={styles.div_Header}>
          <div className={styles.Top_Headar}>
            <div className={styles.Container}>
              <div className={styles.logo}>
                <img src="src\assets\logo.png" alt="" />
              </div>
              <div className={styles.Ul_Links}>
                <ul>
                  <li
                    onClick={() => {
                      ChingStateWedgite("moves");
                    }}
                    className={active == "moves" ? styles.active : undefined}
                  >
                    <i className="fa-solid fa-film"></i> movie
                  </li>
                  <li
                    onClick={() => {
                      ChingStateWedgite("home");
                    }}
                    className={active == "home" ? styles.active : undefined}
                  >
                    <i className="fa-solid fa-house"></i>home
                  </li>
                  <li
                    onClick={() => {
                      ChingStateWedgite("search");
                    }}
                    className={active == "search" ? styles.active : undefined}
                  >
                    <i className="fa-solid fa-magnifying-glass"></i> search
                  </li>
                </ul>
              </div>
              <div className={styles.Button_Top_Header}>
                <button type="button" onClick={() => onFormChange("login")}>
                  <i className="fa-solid fa-right-to-bracket"></i>
                </button>
                <button type="button" onClick={() => onFormChange("signup")}>
                  <i className="fa-solid fa-user-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.Bottom_Headar}>
            <div className={styles.Container}>
              {active == "search" && showFILMdiv && <SearchBottomHeader />}
              {active == "moves" && showFILMdiv && <SearchBottomHeader />}
              {active == "moves" && showFILMdiv && <Cateugers />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headar;
