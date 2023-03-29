import React from "react";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import Backdrop from "./UI/Backdrop";
import Button from "./UI/Button";
import Card from "./UI/Card";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Card className={`${styles["error-modal"]}`}>
          <section>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
            <Button type="button" onClick={props.onCloseModal}>
              Okay
            </Button>
          </section>
        </Card>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
