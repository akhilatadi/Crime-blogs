import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";


const Sidebar = ({ toggle, show, isAuth, signUserOut }) => {
 
  
  
  
  return (
    <div className={`sideContainer ${show ? "show" : ""}`}>
      <div className="close" onClick={toggle}>
        Close
      </div>
      
      <div className="side_menu">
      
    
        
      {isAuth && <Link className="side_link" onClick={()=>toggle()} to="/createpost">CreatePost</Link>}


      <Link className="side_link" onClick={()=>toggle()} to="/">Home</Link>
        <Link to="/posts" className="side_link" onClick={()=>toggle()}>
         Posts
        </Link>
       

        {!isAuth ? (
            <Link className="side_link" to="/login" onClick={()=>toggle()}>Login</Link>
          ) : (
           
            <button className="logout"  onClick={signUserOut}>
              Log Out
            </button>
          
          )}
       

       
      </div>
    </div>
   
  );
};

export default Sidebar;
