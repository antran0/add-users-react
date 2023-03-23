import React from "react";
import User from "./User";
import styles from "./UsersList.module.css";

const UserList = (props) => {
  let usersToDisplay = [];

  for (const user of props.users) {
    usersToDisplay.push(<User key={user.id} name={user.name} age={user.age} />);
  }

  return <ul className={`${styles["users-list"]}`}>{usersToDisplay}</ul>;
};

export default UserList;
