import { useContContext } from "../context_data";
import styles from "./Filme_Div.module.css";

const Foter_film_div = () => {
  const { NEXY_BACK, setNEXT_BACK } = useContContext();
  const ChangeNumperPage = (type) => {
    switch (type) {
      case "blus":
        setNEXT_BACK((prev) => prev - 1);
        window.scrollTo(0, 0);
        break;
      case "incremnt":
        setNEXT_BACK((prev) => prev + 1);
        window.scrollTo(0, 0); // تأكد من التقدم للصفحة التالية
        break;
      default:
        break;
    }
  };
  return (
    <div>
      {" "}
      <div className={styles.footer_filme_dev}>
        <div
          onClick={() => {
            ChangeNumperPage("blus");
          }}
        >
          {" "}
          <i className="fa-solid fa-chevron-left"></i> BACK
        </div>{" "}
        <span style={{ color: "white" }}>{NEXY_BACK}</span>{" "}
        <div
          onClick={() => {
            ChangeNumperPage("incremnt");
          }}
        >
          NEXT <i className="fa-solid fa-chevron-right"></i>
        </div>{" "}
      </div>
    </div>
  );
};

export default Foter_film_div;
