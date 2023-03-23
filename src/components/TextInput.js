import React from "react";
import styles from "./TextInput.module.css";

const TextInput = (props) => {
  return (
    <div className={`${styles["text-input"]}`}>
      <label>{props.label}</label>
      <input
        type="text"
        value={props.value}
        className={styles["text-input__input"]}
        onChange={(event) => props.setValue(event.target.value)}
      />
    </div>
  );
};

export default TextInput;
