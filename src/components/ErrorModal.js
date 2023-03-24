import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "./UI/Card";

const ErrorModal = (props) => {
  return (
    <Card className={`${styles["error-modal"]}`}>
      <section>
        <h2>Invalid input</h2>
        <p>{props.errorMessage}</p>
      </section>
    </Card>
  );
};

export default ErrorModal;
