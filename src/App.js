import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;

