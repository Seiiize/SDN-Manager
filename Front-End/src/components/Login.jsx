import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;
const shakeAnimation = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const Form = styled.form`
  animation: ${(props) =>
    props.shake
      ? css`
          ${shakeAnimation} 0.5s linear
        `
      : "none"};
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shake, setShake] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };
    try {
      const response = await axios.post(
        "https://sdn-manager.vercel.app:3000/api/users/login",
        user
      );
      localStorage.setItem("token", response.data.accessToken);
      console.log(response.data);
      onLogin();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
        setErrorMessage("Invalid credentials");
      } else {
        console.error(error);
      }
    }
  };

  const ErrorMessage = styled.p`
    color: red;
  `;

  // ...

  return (
    <Container>
      <Form onSubmit={handleSubmit} shake={shake}>
        <Input
          type="text"
          shake={shake}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit">Login</Button>
        <Link to="/register">Register</Link>
      </Form>
    </Container>
  );
};

export default Login;
