import React from "react";
import "./App.css";
import UserList from "./components/UsersList";

const INITIAL_USERS = [
  { id: Math.random(), name: "Theodore Bear", age: 5 },
  { id: Math.random(), name: "Pete Zuhut", age: 64 },
  { id: Math.random(), name: "Jane Doe", age: 22 },
  { id: Math.random(), name: "Jonathan Snow", age: 24 },
];

function App() {
  const [addedUsers, setUsers] = React.useState(INITIAL_USERS);

  return (
    <div className="App">
      <UserList users={addedUsers} />
    </div>
  );
}

export default App;
