
import React from "react";
import "./index.css";


const ActionLauncher = () => {
  return (
    <section className="action-launcher">
      <h1>Action Launcher</h1>
      <input type="text" placeholder="Search actions..." className="search-input" />
      <div className="action-buttons">
        <button className="primary">Add Action</button>
        <button>Fee Reversal</button>
        <button>Retail Onboarding</button>
        <button>Address Update</button>
      </div>
    </section>
  );
};




export default ActionLauncher;
