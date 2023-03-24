import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "./UI/Card";

const ErrorModal = (props) => {
  return (
    <Card className={`${styles["error-modal"]}`}>
      <section>
        <h2>Invalid input</h2>
        <p>{props.errorMessage}</p>
        <button type="button" onClick={props.onCloseModal}>
          Okay
        </button>
      </section>
    </Card>
  );
};

export default ErrorModal;
