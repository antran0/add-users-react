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
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: Math.random(), name: name, age: +age },
    ]);
    setErrorMessage("");
  };

  return (
    <div className="App">
      <InputForm
        setErrorMessage={setErrorMessage}
        onAddNewUser={handleAddNewUser}
      />
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
