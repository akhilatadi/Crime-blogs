import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";


const Sidebar = ({ toggle, show }) => {
 
  
  
  
  return (
    <div className={`sideContainer ${show ? "show" : ""}`}>
      <div className="close" onClick={toggle}>
        Close
      </div>
      
      <div className="side_menu">
      
    
        
     <Link className="side_link" onClick={()=>toggle()} to="/createpost">Create Post</Link>


      <Link className="side_link" onClick={()=>toggle()} to="/">Home</Link>
        <Link to="/posts" className="side_link" onClick={()=>toggle()}>
         Posts
        </Link>
       



       
      </div>
    </div>
   
  );
};

export default Sidebar;
