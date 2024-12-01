import React from "react";
import "./index.css";
import TopPane from "../TopPane";
import LeftPane from "../LeftPane";
import CenterPane from "../CenterPane";
import RightPane from "../RightPane";

const MainContent = () => (
 <div>
  <div className="Top-container">
    <TopPane/></div>
  <div className="main-content">
    <LeftPane />
    <CenterPane />
    <RightPane />
  </div>
  
  </div>
);

export default MainContent;
