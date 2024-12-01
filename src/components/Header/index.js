import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => (
  <header className="header"> 

    <div className="search-container">
      <input type="text" placeholder="Chat / Feed chat" className="search-bar" />
      
    </div>
    <div className="profile"> 
    <i class="fa-solid fa-house"></i>
    <span className="bg-yellow name-box">Process Owner HOD</span>
    <span className="bg-pink name-box">Admin</span>
      <span className="username">palak bansal</span>
      <img className="image-icon" src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" alt=""/>
      <div>
        <i class="fa-solid fa-gear"></i>

        </div>
        <div><i class="fa-solid fa-arrow-right-from-bracket"></i>
        <span className="log-out">Log Out</span></div>
      
    </div>
    
  </header>
);

export default Header;
