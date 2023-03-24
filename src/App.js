import "./App.css";
import InputForm from "./components/InputForm";
import React from "react";
import "./App.css";
import UserList from "./components/UsersList";
import ErrorModal from "./components/ErrorModal";

const INITIAL_USERS = [
  { id: Math.random(), name: "Theodore Bear", age: 5 },
  { id: Math.random(), name: "Pete Zuhut", age: 64 },
  { id: Math.random(), name: "Jane Doe", age: 22 },
  { id: Math.random(), name: "Jonathan Snow", age: 24 },
];

function App() {
  const [addedUsers, setUsers] = React.useState(INITIAL_USERS);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleAddNewUser = (name, age) => {
    if (name.length === 0 || age.length === 0) {
      setErrorMessage("Please enter a valid name and age (non-empty values).");
    } else if (+age <= 0) {
      setErrorMessage("Please enter a valid age (> 0).");
    } else {
      setUsers((prevUsers) => [
        ...prevUsers,
        { id: Math.random(), name: name, age: age },
      ]);
      setErrorMessage("");
    }
  };

  return (
    <div className="App">
      <InputForm onAddNewUser={handleAddNewUser} />
      {errorMessage.length !== 0 && (
        <ErrorModal
          errorMessage={errorMessage}
          onCloseModal={() => setErrorMessage("")}
        />
      )}
      <UserList users={addedUsers} />
    </div>
  );
}

export default App;
