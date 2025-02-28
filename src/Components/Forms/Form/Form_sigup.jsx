/* eslint-disable react/prop-types */

import InputFormsHooks from "../../hooks/InputFormsHooks";
import ShowForms from "../../hooks/ShowForms";
import Input from "../InputsFiled/Input";
import styles from "./Forms.module.css";

const Form_sigup = ({ handleBackForm }) => {
  const { INPUT_AltirButsSINGup, LABEL_AlterButisSINGup } = InputFormsHooks();

  return (
    <div className={styles.containerFORM}>
      <form action="" className={styles.from}>
        <div className={styles.div_icon} onClick={handleBackForm}>
          <img src="src\assets\icons8-back-16.png" alt="" />
        </div>
        {INPUT_AltirButsSINGup.map((inputFiled, index) => {
          const Label_Filed = LABEL_AlterButisSINGup[index];
          return (
            <div className={styles.input_div} key={index}>
              <Input inputFiled={inputFiled} Label_Filed={Label_Filed} />
            </div>
          );
        })}
        <label className={styles.label_check}>have account?</label>
        <button type="submit">sig Up</button>
      </form>
    </div>
  );
};

export default Form_sigup;
