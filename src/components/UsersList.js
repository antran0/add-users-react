import React from "react";
import Card from "./UI/Card";
import User from "./User";
import styles from "./UsersList.module.css";

const UserList = (props) => {
  return (
    <Card
      className={`${
        props.users.length > 0
          ? styles["users-list"]
          : styles[".users-list--empty"]
      }`}
    >
      <ul>
        {props.users.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
