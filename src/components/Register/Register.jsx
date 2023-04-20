import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.config";
import { GithubAuthProvider } from "firebase/auth";

const Register = () => {
  const [user, setUser]= useState()
  const provider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  const handleGitHubSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user  = result.user;
     
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {
       user ? <button onClick={handleSignOut}>Sign Out Btn</button> : <button onClick={handleGoogleSignIn}>sign with Google</button>

      }

      <br />

      <button onClick={handleGitHubSignIn}> sign In with GitHub</button>
    </div>
  );
};

export default Register;
