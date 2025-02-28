/* eslint-disable react/prop-types */
import styles from "../Form/Forms.module.css";

const Input = ({ inputFiled, Label_Filed }) => {
  return (
    <>
      <input {...inputFiled} />
      <label {...Label_Filed} className={styles.label}>
        {Label_Filed.text}
      </label>
    </>
  );
};

export default Input;
