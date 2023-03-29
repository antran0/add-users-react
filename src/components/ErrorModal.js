import React from "react";
import styles from "./ErrorModal.module.css";
import Backdrop from "./UI/Backdrop";
import Button from "./UI/Button";
import Card from "./UI/Card";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClick={props.onCloseModal} />
      <Card className={`${styles["error-modal"]}`}>
        <section>
          <h2>{props.title}</h2>
          <p>{props.message}</p>
          <Button type="button" onClick={props.onCloseModal}>
            Okay
          </Button>
        </section>
      </Card>
    </React.Fragment>
  );
};

export default ErrorModal;
