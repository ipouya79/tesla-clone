import React, { useState, useEffect } from "react";
import "./header.css";
function Header() {
  const [cars, getCars] = useState("");

  //  useEffect(()=>{
  //     fetch('/data/carInfo.json')
  //     .then(response => response.json())
  //     .then(data => getCars (data));

  //  },[])

  console.log(cars);
  return (
    <>
      <div className="container-header">
        <div className="main-container">
          <div className="logo-section">
            <img src="images/logo.svg" alt="Logo" />
          </div>
          <div className="menu-section">
            <li>
              <a>Model S</a>
            </li>
            <li>
              <a>Model 3</a>
            </li>
            <li>
              <a>Model X</a>
            </li>
            <li>
              <a>Model Y</a>
            </li>
            <li>
              <a>Solar Roof</a>
            </li>
            <li>
              <a>Solar Panels</a>
            </li>
            
          </div>
          <div className="menu-section-left">
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Account</a>
            </li>
            <li>
               <a>Menu</a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
