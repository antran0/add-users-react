import React from "react";
import TextInput from "./TextInput";
import styles from "./InputForm.module.css";
import Card from "./UI/Card";
import ErrorModal from "./ErrorModal";
import Button from "./UI/Button";

const InputForm = (props) => {
  const [enteredUsername, setEnteredUsername] = React.useState("");
  const [enteredAge, setEnteredAge] = React.useState("");
  const [error, setError] = React.useState();

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
    } else if (Number.isNaN(+enteredAge) || +enteredAge <= 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
    } else {
      props.onAddNewUser(enteredUsername, enteredAge);
      setEnteredUsername("");
      setEnteredAge("");
    }
  };

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={closeModalHandler}
        />
      )}
      <Card className={`${styles["input-form"]}`}>
        <form onSubmit={submitHandler}>
          <TextInput
            label="Username"
            value={enteredUsername}
            setValue={setEnteredUsername}
          />
          <TextInput
            label="Age (Years)"
            value={enteredAge}
            setValue={setEnteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default InputForm;
