import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <li className={`${styles["user"]}`}>
      <div>{props.name}</div>
      <div>{`(${props.age} years old)`}</div>
    </li>
  );
};

export default User;
