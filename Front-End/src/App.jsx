import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Mininet from "./components/Mininet";
import RyuController from "./components/RyuController";
import Login from "./components/Login";
import Register from "./components/Register";
import { TerminalProvider } from "./components/TerminalContext";
import "./app.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <TerminalProvider>
        {isLoggedIn && (
          <nav
            style={{
              display: "flex",
              justifyContent: "space-around",
              height: "60px",
              alignItems: "center",
              color: "blue",
              backgroundColor: "#f6f6f229",
            }}
          >
            <Link to="/home" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/mininet" style={{ textDecoration: "none" }}>
              Mininet
            </Link>
            <Link to="/ryu-controller" style={{ textDecoration: "none" }}>
              Ryu Controller
            </Link>
            <Link
              to="/login"
              onClick={handleLogout}
              style={{ textDecoration: "none" }}
            >
              Logout
            </Link>
          </nav>
        )}
        <Routes>
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/home" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/register"
            element={
              isLoggedIn ? (
                <Navigate to="/home" />
              ) : (
                <Register onRegister={handleLogin} />
              )
            }
          />
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/mininet"
            element={isLoggedIn ? <Mininet /> : <Navigate to="/login" />}
          />
          <Route
            path="/ryu-controller"
            element={isLoggedIn ? <RyuController /> : <Navigate to="/login" />}
          />
        </Routes>
      </TerminalProvider>
    </Router>
  );
};

export default App;
