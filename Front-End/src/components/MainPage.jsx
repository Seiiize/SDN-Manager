import React from "react";
import Mininet from "./Mininet";
const MainPage = () => {
  return (
    <div>
      <iframe
        src="http://192.168.0.200:8888/"
        style={{ width: "100%", height: "500px" }}
        title="WebSSH"
      />
      <Mininet />
    </div>
  );
};

export default MainPage;
