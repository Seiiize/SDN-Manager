import React, { useContext, useState } from "react";
import { TerminalContext } from "./TerminalContext";
import base64url from "base64-url";
import { Buffer } from "buffer";
import "./mininet.css";
const Mininet = () => {
  window.Buffer = Buffer;
  const { terminals, setTerminals } = useContext(TerminalContext);
  const mininetTerminals = terminals.mininet;
  const [hostname, setHostname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showTerminals, setShowTerminals] = useState(false);

  const addTerminal = () => {
    setTerminals({
      ...terminals,
      mininet: [...mininetTerminals, mininetTerminals.length + 1],
    });
  };

  const handleHostnameSubmit = () => {
    setShowTerminals(true);
  };

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const [showHelp, setShowHelp] = useState(false);
  const handleHelpClick = () => {
    setShowHelp(!showHelp);
  };
  return (
    <div
      style={{
        position: "absolute",
        bottom: "150px",
        left: "100px",
        border: "2px dashed #388087",
        width: "700px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {!showTerminals && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              background: "none",
              marginTop: "40px",
            }}
          >
            <div class="inputContainer">
              <input
                required="required"
                id="inputField"
                placeholder="Hostname"
                type="text"
                value={hostname}
                onChange={(e) => setHostname(e.target.value)}
              />
              <label class="usernameLabel" for="inputField">
                Hostname
              </label>
              <svg viewBox="0 0 448 512" class="userIcon">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
              </svg>
            </div>
            <div class="inputContainer">
              <input
                required="required"
                id="inputField"
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label class="usernameLabel" for="inputField">
                Username
              </label>
              <svg viewBox="0 0 448 512" class="userIcon">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
              </svg>
            </div>
            <div class="inputContainer">
              <input
                required="required"
                id="inputField"
                placeholder="Password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label class="usernameLabel" for="inputField">
                Password
              </label>
              <svg viewBox="0 0 448 512" class="userIcon">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
              </svg>
            </div>
            <button
              class="btn"
              type="button"
              onClick={handleHostnameSubmit}
              style={{
                cursor: "pointer",
                margin: "10px",
              }}
            >
              <strong style={{ background: "none" }}>Soumettre</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow" style={{ background: "none" }}>
                <div class="circle" style={{ background: "none" }}></div>
                <div class="circle"></div>
              </div>
            </button>
          </div>
        )}
        {showTerminals &&
          mininetTerminals.map((terminal) => (
            <iframe
              key={terminal}
              src={`http://192.168.0.3:8888/?hostname=${hostname}&username=${username}&password=${base64url.encode(
                password
              )}#bgcolor=#f3f3f3&fontcolor=#388087`}
              style={{
                width: "700px",
                height: "420px",
                marginTop: "10px",
              }}
              title={`Mininet ${terminal}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Mininet;
