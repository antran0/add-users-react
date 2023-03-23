import React from "react";
import User from "./User";
import styles from "./UsersList.module.css";

const UserList = (props) => {
  return (
    <ul className={`${styles["users-list"]}`}>
      {props.users.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
};

export default UserList;
