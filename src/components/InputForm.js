import React from "react";
import TextInput from "./TextInput";
import styles from "./InputForm.module.css";
import Card from "./UI/Card";

const InputForm = (props) => {
  const [enteredUsername, setEnteredUsername] = React.useState("");
  const [enteredAge, setEnteredAge] = React.useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.length === 0 || enteredAge.length === 0) {
      props.setErrorMessage(
        "Please enter a valid name and age (non-empty values)."
      );
    } else if (Number.isNaN(+enteredAge) || +enteredAge <= 0) {
      props.setErrorMessage("Please enter a valid age (> 0).");
    } else {
      props.onAddNewUser(enteredUsername, enteredAge);
      setEnteredUsername("");
      setEnteredAge("");
    }
  };

  return (
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
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default InputForm;
