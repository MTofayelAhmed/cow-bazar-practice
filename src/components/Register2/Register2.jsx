import React, { useState } from "react";

const Register2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const handlePassword = (event) => {
    const password = event.target.value;
    setPassword(password);
  };
  const handleForm = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
  };
  console.log(email, password);
  return (
    <div>
      <form onSubmit={handleForm}>
        <input onChange={handleEmail} type="email" name="email" id="email" />
        <br />
        <br />
        <input
          onBlur={handlePassword}
          type="password"
          name="password"
          id="password"
        />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Register2;
