import React from "react";

const User = (props) => {
  return (
    <li>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </li>
  );
};

export default User;
