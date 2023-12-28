import React, { useContext, useState } from "react";
import { TerminalContext } from "./TerminalContext";
import base64url from "base64-url";
import { Buffer } from "buffer";
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
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!showTerminals && (
        <div>
          <input
            type="text"
            value={hostname}
            onChange={(e) => setHostname(e.target.value)}
            placeholder="Entrez le hostname"
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Entrez le username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez le mot de passe"
          />
          <button onClick={handleHostnameSubmit}>Soumettre</button>
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
              width: "1000px",
              height: "500px",
              marginTop: "10px",
            }}
            title={`Mininet ${terminal}`}
          />
        ))}
      <button
        onClick={addTerminal}
        style={{
          color: "#F6F6F2",
          borderRadius: "10px",
          width: "300px",
          height: "50px",
          fontSize: "20px",
          fontWeight: "700",
          margin: "10px",
          backgroundColor: isHover ? "#38808797" : "#388087",
          cursor: isHover ? "pointer" : "default",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Add Terminal
      </button>
    </div>
  );
};

export default Mininet;
