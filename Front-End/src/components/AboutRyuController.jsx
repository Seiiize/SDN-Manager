import React from "react";
import { Link } from "react-router-dom";
import first from "../images/ryu/1.png";
import second from "../images/ryu/2.png";
import third from "../images/ryu/3.png";
import fourth from "../images/ryu/4.png";
import fifth from "../images/ryu/5.png";

const AboutRyuController = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px",
        alignContent: "center",
        fontSize: "20px",
      }}
    >
      <h1>À propos de Ryu Controller</h1>
      <p style={{ width: "80%" }}>
        Ryu Controller est un contrôleur de réseau défini par logiciel (SDN)
        ouvert. Ryu fournit des composants logiciels avec une API bien définie
        qui facilite la création de nouvelles applications de gestion et de
        contrôle de réseau.
      </p>
      <h2>Fonctionnalités de Ryu Controller</h2>
      <ul>
        <li>
          Ryu Controller prend en charge divers protocoles pour gérer les
          appareils réseau, tels que OpenFlow, Netconf, OF-config, etc.
        </li>
        <li>Il prend également en charge les extensions Nicira.</li>
        <li>
          Les administrateurs IT écrivent des applications spécifiques qui
          communiquent avec le contrôleur Ryu sur la façon de gérer les
          commutateurs et les routeurs.
        </li>
      </ul>
      <h2 style={{ background: "none" }}>Tutoriel d'utilisation </h2>
      <ol
        style={{
          textAlign: "center",
          width: "50%",
          textalign: "center",
          listStylePosition: "inside",
          padding: "200px",
          paddingTop: "0px",
          fontSize: "20px",
          background: "none",
        }}
      >
        <li>
          Après avoir installé tout les packages necessaires pour utiliser
          mininet (pip,python,ryu,ssh...), il faudra vous connecter en ssh à
          votre machine qui contient mininet comme suit dans les images :
          <br />
          <img
            src={first}
            style={{
              width: "60%",
              border: "5px dashed #388087",
              margin: "10px",
            }}
          />
          <img
            src={second}
            style={{
              width: "60%",
              border: "5px dashed #388087",
              margin: "10px",
            }}
          />
        </li>
        <li>
          Aprés avoir entrer les credentiels pour accéder à votre machine en
          ssh, vous obtiendrai ce qui suit: <br />
          <img
            src={third}
            style={{
              width: "60%",
              border: "5px dashed #388087",
              margin: "10px",
            }}
          />
        </li>
        <li>
          Pour déployer votre controlleur sdn avec son interface graphique, on
          utilise la commande suivante: (Dans l'exemple, on déploie un
          controlleur ryu et en utilisant l'application simple_switch_13)
          <br />
          <img
            src={fourth}
            style={{
              width: "60%",
              border: "5px dashed #388087",
              margin: "10px",
            }}
          />
        </li>
        <li>
          Maintenant, vous avez déployé votre controlleur Ryu, vous pouvez voir
          les paquets qui passent par votre controlleur:
          <br />
          <img
            src={fifth}
            style={{
              width: "60%",
              border: "5px dashed #388087",
              margin: "10px",
            }}
          />
        </li>
        <li>
          Après avoir fait ceci, il faudra maintenant voir le tutoriel de{" "}
          <Link to="/mininet">Mininet</Link> pour continuer votre LAB
        </li>
      </ol>
    </div>
  );
};

export default AboutRyuController;
