import React, { useRef, useState } from "react";

import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/Authcontext.js";

import bgImg from "../images/csupport.jpeg";

function Register() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup} = useAuthContext();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Password confirmation does not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Something went wrong");
    }
    setLoading(false);
  }
  return (
    <div>
      <Form>
        <div className="register">
          <div className="col-1">
            <h2>Register</h2>
            <span>Sign up to gain full access to FeedForward's services</span>
            {error}

            <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input ref={nameRef} type="text" name="name" id="name" />
              <label htmlFor="email">Email</label>
              <input ref={emailRef} type="email" name="email" id="email" />
              <label htmlFor="password">Password</label>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                id="password"
              />
              <label htmlFor="password">Confirm Password</label>
              <input
                ref={confirmPasswordRef}
                type="password"
                name="password"
                id="password"
              />
              <button type="submit" disabled={loading} className="btn">
                Sign Up
              </button>
              <div>
                Already registered? <Link to="/">Login here</Link>
              </div>
            </form>
          </div>

          <div className="col-2">
            <img src={bgImg} alt="" />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Register;

const Form = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .register {
    max-width: 978px;
    width: 100vw;
    display: flex;
    border: 1px solid #e9ecef;
    border-radius: 15px;
    box-shadow: 1px 3px 10px #e9ecef;
    background-color: white;
  }

  .register span {
    color: #adb5bd;
  }

  #form {
    max-width: 320px;
    width: 100vw;
    margin: 2em auto;
  }

  #form > input,
  .btn {
    border: 1px solid #e9ecef;
    padding: 0.9em 1em;
  }

  #form > input:focus {
    outline: none;
  }

  #form > .btn {
    background-color: rgb(50, 101, 116);
    color: #e9ecef;
    font-size: 1em;
    cursor: pointer;
  }

  .flex {
    display: flex;
    gap: 1em;
  }

  .flex-col {
    flex-direction: column;
  }

  .register .col-1 {
    margin: auto;
    padding: 3em 0;
  }

  .register .col-2 img {
    width: 480px;
    height: 100%;
    object-fit: cover;
    align-self: flex-end;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: none;
  }

  @media screen and (min-width: 860px) {
    .register .col-2 img {
      display: initial;
    }
  }
`;
