import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";




function Navbar({ toggle }) {
  const [move, setMove] = useState(false);

 
  const moveNavbar=()=>{
    if (window.scrollY >10){
setMove(true);
return;
    }
    setMove(false);
  };

  window.addEventListener('scroll', moveNavbar )

  return (
    <nav>
      <div className={`navbar ${move ? 'move' : ''}`} >
        <Link to="/" className="navLink">
          <div className="logo_name">Crime Blogs</div>
        </Link>



        <div className="navIcon" onClick={toggle}>
        <FaBars className="icon"> </FaBars>
        </div> 
   
      </div>
    </nav>
  );
}

export default Navbar;
