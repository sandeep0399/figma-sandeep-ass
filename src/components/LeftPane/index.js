import React from "react";
import "./index.css";

const LeftPane = () => (
  <div className="left-pane">
    <div className="Customer-Details-container">
    <div className="profile">
      <div className="cb-container"> CB</div> 
      <div className="cb-box">
         <h2>Hannibal Smith</h2>
         <p>Market street,sanfrancisco</p>
         </div>
     
     </div>
     <div className="Id-box">
      <div className="first-box">
      <span className="deatails"><p>Customer ID</p> <h3>12345</h3> </span>
      <span className="deatails"><p>Email</p> <h3>sandeep.12345@gmail.com</h3> </span>
      <span className="deatails bottom-radius-none"><p>Phone number</p> <h3>12345dfds</h3> </span>
      </div>
      <span className="add-box"> <button className="button-add ">ADD</button>  </span>
     </div>
     <div className="Id-box">
      <div className="first-box">
      <span className="deatails"><p>loyality Tier</p> <h3>Silver</h3> </span>
      <span className="deatails bottom-radius-none"><p>Segment</p> <h3>sleepy Customer</h3> </span>
      
      </div>
      <span className="add-box"> <button className="button-add ">ADD</button>  </span>
     </div>
     <div className="Id-box">
      <div className="first-box">
      <span className="deatails"><p>Life time value</p> <h3>$ 1M</h3> </span>
      <span className="deatails bottom-radius-none"><p>Property to purchase</p> <h3 className="bg-yellw"><i class="fa-solid fa-circle-half-stroke"></i> 75%</h3> </span>
      </div>
      <span className="add-box"> <button className="button-add ">ADD</button>  </span>
     </div>
     <div className="Id-box">
      <div className="first-box">
      <span className="deatails bottom-radius-none"><p>Engagement Score</p> <h3 className="greenn"><i class="fa-solid fa-chart-pie"></i> 80%</h3> </span>
      
     
      </div>
      <span className="add-box"> <button className="button-add ">ADD</button>  </span>
     </div>

    </div>
    <div className="buttons-box"> 
      <button className="button-user primary "><i class="fa-solid fa-user-plus"></i>Assign another agent</button>
      <button className="button-user">Add New Wegith</button>
      
      
      </div>
   
   
  </div>
);

export default LeftPane;
