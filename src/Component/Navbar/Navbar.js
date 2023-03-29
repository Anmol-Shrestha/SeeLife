import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../../Page/Home";

import Aboutus from "../../Page/Aboutus";
import Causes from "../../Page/Causes";

export default function Navbar() {
  return (
    <>
      <header>
        <div className="container">
         
         <div className="Logo">
            <Link to="/">
            <img src={require('../Asset/Nav/logo.png.webp')} alt="" />
         
            </Link> 
        </div>

    
          <nav>
         
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/Aboutus">ABOUT</Link>
                </li>
                <li>
                    <Link to="/Causes">CAUSES</Link>
                </li>
            </ul>

          </nav>

        </div>
      </header>


 <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Aboutus" element={<Aboutus/>} />
    <Route path="/Causes" element={<Causes/>} />

 </Routes>

    </>
  );
}
