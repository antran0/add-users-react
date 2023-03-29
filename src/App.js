import InputForm from "./components/InputForm";
import React from "react";
import UserList from "./components/UsersList";

const INITIAL_USERS = [
  { id: Math.random(), name: "Theodore Bear", age: 5 },
  { id: Math.random(), name: "Pete Zuhut", age: 64 },
  { id: Math.random(), name: "Jane Doe", age: 22 },
  { id: Math.random(), name: "Jonathan Snow", age: 24 },
];

function App() {
  const [addedUsers, setUsers] = React.useState(INITIAL_USERS);

  const handleAddNewUser = (name, age) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: Math.random(), name: name, age: +age },
    ]);
  };

  const handleDeleteUser = (userId) => {
    setUsers(addedUsers.filter((item) => item.id !== userId));
  };

  return (
    <div className="App">
      <InputForm onAddNewUser={handleAddNewUser} />
      <UserList users={addedUsers} onDeleteUser={handleDeleteUser} />
    </div>
  );
}

export default App;
