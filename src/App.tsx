import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Body } from "./components/Body";

const App: React.FC = () => {
  return (
    <div className="bg">
      <NavBar></NavBar>
      <Body></Body>
    </div>
  );
};

export default App;
