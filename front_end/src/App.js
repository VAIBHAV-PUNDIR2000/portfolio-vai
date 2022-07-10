import React from "react";
import { Projects, Footer, Header, Skills, Info } from "./Containers/exporter";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app ">
      <Navbar />
      <Header />
      <Info />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
