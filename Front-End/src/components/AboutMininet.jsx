import React from "react";
import { Link } from "react-router-dom";
import first from "../images/mininet/1.png";
import second from "../images/mininet/2.png";
import third from "../images/mininet/4.png";
import fourth from "../images/mininet/5.png";
import fifth from "../images/mininet/6.png";
import sixth from "../images/mininet/7.png";
import seventh from "../images/mininet/8.png";
import eighth from "../images/mininet/9.png";
import ninth from "../images/mininet/10.png";
import tenth from "../images/mininet/11.png";

const AboutMininet = () => {
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
      <h1>À propos de Mininet</h1>
      <p style={{ width: "80%" }}>
        Mininet est un émulateur de réseau qui crée un réseau de hôtes virtuels,
        de commutateurs, de contrôleurs et de liens. Les hôtes Mininet exécutent
        un logiciel réseau standard Linux, et ses commutateurs prennent en
        charge OpenFlow pour un routage personnalisé hautement flexible et le
        réseau défini par logiciel.
      </p>
      <h2>Fonctionnalités de Mininet</h2>
      <ul>
        <li>
          Un lanceur en ligne de commande (mn) pour instancier des réseaux.
        </li>
        <li>
          Une API Python pratique pour créer des réseaux de différentes tailles
          et topologies.
        </li>
        <li>Des exemples pour vous aider à démarrer.</li>
        <li>Une documentation complète de l'API via les docstrings Python.</li>
        <li>
          Prend en charge les tests de régression au niveau du système, qui sont
          reproductibles et facilement empaquetés.
        </li>
        <li>
          Permet des tests de topologie complexes, sans avoir à câbler un réseau
          physique.
        </li>
        <li>
          Comprend une interface de ligne de commande qui est consciente de la
          topologie et d'OpenFlow, pour le débogage ou l'exécution de tests sur
          l'ensemble du réseau.
        </li>
        <li>
          Prend en charge des topologies personnalisées arbitraires, et comprend
          un ensemble de base de topologies paramétrées.
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
          background: "none",
        }}
      >
        <li>
          Après avoir installé tout les packages necessaires pour utiliser
          mininet (pip,python,mininet,ssh...), il faudra vous connecter en ssh à
          votre machine qui contient mininet comme suit dans les images : <br />
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
          Pour déployer une topologie mininet avec un controlleur sdn, on
          utilise la commande suivante: (Dans l'exemple, on déploie une
          topologie en spécifiant l'adresse du controlleur et le type de
          topologie et le nombre de switch.) <br />
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
          Vous entrez donc dans le CLI de mininet de votre topologie comme suit:{" "}
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
          <Link to="/ryu-controller">Ryu Controller</Link> pour continuer ce qui
          suit. <br />
          Après avoir fini le tutoriel de RyuController, nous pourrons tester la
          connectivité de notre topologie.
          <br />
          <img
            src={sixth}
            style={{
              width: "60%",
              border: "5px dashed #388087",
              margin: "10px",
            }}
          />
        </li>
        <li>
          Pour afficher les équipements présent dans notre topologie, vous
          pouvez utiliser la commande suivante:
          <br />
          <img
            src={seventh}
            style={{
              width: "60%",
              border: "5px dashed #388087",
              margin: "10px",
            }}
          />
        </li>
        <li>
          Pour afficher toutes les informations de tous les nœuds de notre
          topologie, vous pouvez utiliser la commande suivante:
          <br />
          <img
            src={eighth}
            style={{
              width: "60%",
              border: "5px dashed #388087",
              margin: "10px",
            }}
          />
        </li>
        <li>
          Pour voir notre topologie, on utilise le champ prévu à celà dans la
          page <Link to="/home"> Home</Link> comme suit en introduisant
          l'adresse IP de notre controlleur:
          <img
            src={ninth}
            style={{
              width: "60%",
              border: "5px dashed #388087",
              margin: "10px",
            }}
          />
        </li>
        <li>
          En accédant à la topologie, on obtient ce qui suit:
          <img
            src={tenth}
            style={{
              width: "60%",
              border: "5px dashed #388087",
              margin: "10px",
            }}
          />
        </li>
      </ol>
    </div>
  );
};

export default AboutMininet;
