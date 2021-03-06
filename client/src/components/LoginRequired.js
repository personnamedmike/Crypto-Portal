import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  margin: 1rem;
  border: solid whitesmoke 1px;
  border-radius: 5px;
  text-align: center;
  padding-bottom: 2rem;
`;

const Span = styled.span`
  text-decoration: underline;
  color: #2e5077;

  &:hover {
    cursor: pointer;
  }
`;

function LoginRequired() {
  let navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/login");
  }

  function handleSignup(e) {
    e.preventDefault();
    navigate("/signup");
  }

  function handleNavBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <Div>
      <h2>You must be logged into use that feature!</h2>
      <div>
        <p>
          <Span onClick={handleLogin}>Login</Span> |{" "}
          <Span onClick={handleSignup}>Signup</Span> |{" "}
          <Span onClick={handleNavBack}>Go back</Span>
        </p>
      </div>
    </Div>
  );
}

export default LoginRequired;
