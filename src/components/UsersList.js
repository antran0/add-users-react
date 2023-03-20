import React from "react";
import User from "./User";

const UserList = (props) => {
  let usersToDisplay = [];

  for (const user of props.users) {
    usersToDisplay.push(<User key={user.id} name={user.name} age={user.age} />);
  }

  return <ul>{usersToDisplay}</ul>;
};

export default UserList;
