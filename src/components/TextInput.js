import React from "react";
import styles from "./TextInput.module.css";

const TextInput = React.forwardRef((props, ref) => {
  return (
    <div className={`${styles["text-input"]}`}>
      <label>{props.label}</label>
      <input type="text" className={styles["text-input__input"]} ref={ref} />
    </div>
  );
});

export default TextInput;
