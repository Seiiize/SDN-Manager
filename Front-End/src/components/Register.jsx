import React, { useState } from "react";
import axios from "axios";
import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
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
  text-align: center;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
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
const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;
const ErrorMessage = styled.p`
  color: red;
`;
const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    color: pink;
  }
`;

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shake, setShake] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    const user = { username, email, password };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        user
      );
      console.log(response.data);

      // Appeler onRegister après une inscription réussie
      onRegister();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
        setErrorMessage(error.response.data);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} shake={shake}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <Button type="submit">Register</Button>
        <StyledLink to="/login">Cliquez ici pour accéder au Login</StyledLink>
      </Form>
    </Container>
  );
};

export default Register;
