import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import bgImg from "../images/csupport.jpeg";
import { useAuthContext } from "../context/Authcontext.js";

function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login} = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/feedback-form");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }
  
  return (
    <div>
      <Form>
        <div className="register">
          <div className="col-1">
            <h2>Login</h2>
            <span>Login to access your account</span>
            <div style={{height: '10px'}}>
            {error ? <div style={{color:'red'}}>{error}</div> : ''}
            </div>

            <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
              <label htmlFor="email" style={{textAlign:'start'}}>Email</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="someone@something.com"
                required
              />
              <label htmlFor="password" style={{textAlign:'start'}}>Password</label>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="password"
                required
              />
              <button type="submit" disabled={loading} className="btn">
                Login
              </button>
              <div>
                Do not have an account? <Link to="/register" style={{color:'black'}}>Sign up here</Link>
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

export default Login;

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
