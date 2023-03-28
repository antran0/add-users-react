import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  const handleClick = () => {
    props.onClick(props.id);
  };

  return (
    <li className={`${styles["user"]}`} onClick={handleClick}>
      <div>{props.name}</div>
      <div>{`(${props.age} years old)`}</div>
    </li>
  );
};

export default User;
