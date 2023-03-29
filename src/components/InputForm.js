import React from "react";
import TextInput from "./TextInput";
import styles from "./InputForm.module.css";
import Card from "./UI/Card";
import ErrorModal from "./ErrorModal";
import Button from "./UI/Button";

const InputForm = (props) => {
  const nameInputRef = React.useRef();
  const ageInputRef = React.useRef();

  const [error, setError] = React.useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

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
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
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
          <TextInput label="Username" ref={nameInputRef} />
          <TextInput label="Age (Years)" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default InputForm;
