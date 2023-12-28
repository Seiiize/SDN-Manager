import React, { useState } from "react";
import Mininet from "./Mininet";
import RyuController from "./RyuController";

const Home = () => {
  const [src, setSrc] = useState("");
  const [ip, setIp] = useState("");
  const [showIframe, setShowIframe] = useState(false);

  function actualiserIframe() {
    setSrc(`http://${ip}:8080/?t=${new Date().getTime()}`);
    setShowIframe(true);
  }

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Topologie</h1>
        {!showIframe ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {ip === "" && <h3>Entrez l'adresse IP de votre contrôleur</h3>}
            <input
              type="text"
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              placeholder="Entrez l'adresse IP"
            />
            <button onClick={actualiserIframe}>Soumettre</button>
          </div>
        ) : (
          <iframe
            src={src}
            style={{
              width: "1000px",
              height: "530px",
              border: "1px solid black",
              backgroundColor: "#f3f3f3",
              borderRadius: "20px",
            }}
            id="monIframe"
            title="SDN Topology"
          />
        )}
        <button
          onClick={actualiserIframe}
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
          Actualiser la topologie
        </button>
      </div>
      <Mininet />
      <RyuController />
    </div>
  );
};

export default Home;
