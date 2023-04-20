import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.config";

const RegisterBS = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (event) => {
    const auth = getAuth(app);
    event.preventDefault();
    setSuccess("");
   
    const email = event.target.email.value;

    const password = event.target.password.value;
    console.log(email, password);
    setError("")
    if (!/ (?=.*[A-Z])/.test(password)) {
      setError("please at least one upper case");
      return;
    } else if (!/ (?=.*\d)/.test(password)) {
      setError("please at least one digit");
      return;
    } else if (password.length < 6) {
      setError("at least 6 character");
      return;
    }

    console.log(password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setError("");
        event.target.reset();
        setSuccess("user has created successfully");
      })

      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(error.message);
        setSuccess("");
      });
  };

  return (
    <div className="w-50 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p className="text-danger">
        <small>{error}</small>
      </p>

      <p className="text-success">
        <small>{success}</small>
      </p>
    </div>
  );
};

export default RegisterBS;
