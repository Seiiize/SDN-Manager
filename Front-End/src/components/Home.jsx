import React, { useState } from "react";
import Mininet from "./Mininet";
import RyuController from "./RyuController";
import { Link } from "react-router-dom";
import "./home.css";
import ryu from "../images/ryu.png";
import mininet from "../images/mininet.png";

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
  const showryustyle = {
    visibility: "visible",
    opacity: 1,
    transition: "visibility 0s, opacity 0.5s linear",
  };
  const dontshowryustyle = {
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 0s 0.5s, opacity 0.5s linear",
  };
  const showmininetstyle = {
    visibility: "visible",
    opacity: 1,
    transition: "visibility 0s, opacity 0.5s linear",
  };
  const dontshowmininetstyle = {
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 0s 0.5s, opacity 0.5s linear",
  };
  const [showMininet, setShowMininet] = useState(false);
  const [showRyuController, setShowRyuController] = useState(false);
  const [showHelpryu, setShowHelpryu] = useState(false);
  const handleHelpryuClick = () => {
    setShowHelpryu(!showHelpryu);
  };
  const [showHelp, setShowHelp] = useState(false);
  const handleHelpClick = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div style={{ background: "transparent" }}>
      <nav id="barre-des-taches"></nav>

      <div id="contenu-principal"></div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <h1 style={{ fontSize: "50px", margin: "20px" }}>SDN Manager</h1>
        <h3>Bienvenue dans votre gestionnaire de réseau SDN</h3>
        <p>
          Dans ce gestionnaire de réseau SDN, vous pourrez retrouver un aperçu
          de la topologie de votre réseau utilisant Mininet et le controlleur
          Ryu.
        </p>
        <p>
          Pour une bonne utilisation du site, veuillez consulter les différentes
          pages <Link to="/mininet">Mininet</Link> et{" "}
          <Link to="/ryu-controller">Ryu Controller</Link>
        </p>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <h1 style={{ marginTop: "20px" }}>Topologie</h1>
        {!showIframe ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
          >
            {ip === "" && <h3>Entrez l'adresse IP de votre contrôleur</h3>}
            <div
              class="inputContainer"
              style={{
                margin: "40px",
                background: "transparent",
              }}
            >
              <input
                required="required"
                id="inputField"
                placeholder="Entrez l'adresse IP"
                type="text"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                style={{
                  background: "transparent",
                }}
              />
              <label
                class="usernameLabel"
                for="inputField"
                style={{ color: "var(--text-color)" }}
              >
                Adresse Ip
              </label>
              <svg viewBox="0 0 448 512" class="userIcon">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
              </svg>
            </div>
            <button
              class="btn"
              type="button"
              onClick={actualiserIframe}
              style={{
                cursor: "pointer",
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
        ) : (
          <iframe
            src={src}
            style={{
              width: "1000px",
              height: "530px",
              border: "1px solid black",
              backgroundColor: "#f3f3f3",
              borderRadius: "20px",
              overflow: "hidden",
            }}
            id="monIframe"
            title="SDN Topology"
          />
        )}
        <button
          class="btn"
          type="button"
          onClick={actualiserIframe}
          style={{
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          <strong style={{ background: "none" }}>
            Actualiser la topologie
          </strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow" style={{ background: "none" }}>
            <div class="circle" style={{ background: "none" }}></div>
            <div class="circle"></div>
          </div>
        </button>
      </div>
      <div
        className="boutonmininet"
        style={{
          position: "absolute",
          bottom: "5px",
          left: "400px",
        }}
      >
        <button
          class="button"
          onClick={() => setShowMininet(!showMininet)}
          style={{ width: "50px", height: "50px" }}
        >
          <img src={mininet} style={{ height: "70px", background: "none" }} />
          <div class="active_line"></div>
          <span class="text">Mininet</span>
        </button>
      </div>
      <div style={showMininet ? showmininetstyle : dontshowmininetstyle}>
        <Mininet />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "600px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: "transparent",
          }}
        >
          <button
            class="btn"
            type="button"
            onClick={handleHelpClick}
            style={{
              cursor: "pointer",
              position: "absolute",
              left: "150px",
              top: "200px",
            }}
          >
            <strong style={{ background: "none" }}>Help with Mininet</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow" style={{ background: "none" }}>
              <div class="circle" style={{ background: "none" }}></div>
              <div class="circle"></div>
            </div>
          </button>

          {showHelp && (
            <div
              style={{
                position: "absolute",
                left: "0px",
                top: "250px",
                width: "600px",
                border: "5px dashed #388087",
              }}
            >
              <h2 style={{ background: "transparent" }}>
                Commandes Mininet utiles :
              </h2>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <code>sudo mn --test pingall</code> : teste la connectivité
                  entre tous les hôtes.
                </li>
                <li>
                  <code>h1 ping h2</code> : fait en sorte que le hôte 1 ping le
                  hôte 2.
                </li>
                <li>
                  <code>h1 ifconfig</code> : affiche la configuration réseau du
                  hôte 1.
                </li>
                <li>
                  <code>net</code> : affiche le réseau.
                </li>
                <li>
                  <code>dump</code> : affiche toutes les informations de tous
                  les nœuds.
                </li>
                <li>
                  <code>exit</code> : quitte le CLI Mininet.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div
        className="boutonryucontroller"
        style={{ position: "absolute", bottom: "5px", right: "400px" }}
      >
        <button
          class="button"
          onClick={() => setShowRyuController(!showRyuController)}
          style={{ width: "50px", height: "50px" }}
        >
          <img src={ryu} style={{ height: "30px", background: "none" }} />

          <div class="active_line"></div>
          <span class="text">Ryucontroller</span>
        </button>
      </div>
      <div style={showRyuController ? showryustyle : dontshowryustyle}>
        <RyuController />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "600px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: "transparent",
          }}
        >
          <button
            class="btn"
            type="button"
            onClick={handleHelpryuClick}
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "150px",
              top: "200px",
            }}
          >
            <strong style={{ background: "none" }}>
              Help with Ryu Controller
            </strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow" style={{ background: "none" }}>
              <div class="circle" style={{ background: "none" }}></div>
              <div class="circle"></div>
            </div>
          </button>

          {showHelpryu && (
            <div
              style={{
                position: "absolute",
                right: "0px",
                top: "250px",
                width: "600px",
                border: "5px dashed #388087",
              }}
            >
              <h2 style={{ background: "transparent" }}>
                Commandes Mininet utiles :
              </h2>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  Démarrer le contrôleur Ryu avec son interface:{" "}
                  <code>
                    sudo ryu-manager ryu.app.gui_topology.gui_topology
                    ryu.app.simple_switch_13 --observe-links
                  </code>
                </li>
                <li>
                  Lister les applications Ryu disponibles :{" "}
                  <code>ryu-manager --list-apps</code>
                </li>
                <li>
                  Vérifier la version de Ryu :{" "}
                  <code>ryu-manager --version</code>
                </li>
                <li>
                  Exécuter Ryu en arrière-plan :{" "}
                  <code>ryu-manager ryu.app.simple_switch &</code>
                </li>
                <li>
                  Arrêter Ryu : <code>killall ryu-manager</code>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
