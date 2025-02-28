/* eslint-disable react/prop-types */

import InputFormsHooks from "../../hooks/InputFormsHooks";
import Input from "../InputsFiled/Input";
import styles from "./Forms.module.css";
const From_login = ({ handleBackForm }) => {
  const { INPUT_AltirButsLOGin, LABEL_AlterButisLOGin } = InputFormsHooks();
  return (
    <div className={styles.containerFORM}>
      <form action="" className={styles.from}>
        <div className={styles.div_icon} onClick={handleBackForm}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        {INPUT_AltirButsLOGin.map((inputFiled, index) => {
          const Label_Filed = LABEL_AlterButisLOGin[index];
          return (
            <div className={styles.input_div} key={index}>
              <Input inputFiled={inputFiled} Label_Filed={Label_Filed} />
            </div>
          );
        })}

        <label htmlFor="chexkBox" className={styles.label_check}>
          <input type="checkbox" id="chexkBox" />
          remmber passowrd
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default From_login;
