import React from "react";
import md5 from "md5";

function Gravatar(props) {
  const email = props.email;
  const hash = md5(email);

  return (
    <img
      className={props.className}
      src={`http://2.gravatar.com/avatar/${hash}`}
      alt="avatar"
    />
  );
}

export default Gravatar;
