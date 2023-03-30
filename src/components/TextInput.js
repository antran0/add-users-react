import React from "react";
import styles from "./TextInput.module.css";

const TextInput = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <label className={styles["text-input__label"]}>{props.label}</label>
      <input type="text" className={styles["text-input__input"]} ref={ref} />
    </React.Fragment>
  );
});

export default TextInput;
