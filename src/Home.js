import React from 'react'
import "./Home.css"

import policee from "./images/policee.mp4"
import { Link } from 'react-router-dom'

function Home({isAuth}) {
  return (
    <div className="hero_container"  >
     
     
      <video autoPlay loop muted >
        <source  src={policee} type="video/mp4" />
      </video>
      <div className="content">
        <div className="content_items">
          <h1>Welcome to Crime Blogs</h1>


        {isAuth && ( <div className="hero_text">
         You've Successfully Logged-In Mate! Check-Out the Sidebar to View Or Add Cases to the Collection.
          </div>)}

         {!isAuth && (
           <>
           <div className="hero_text">
          It's a Web App that allows you to view and add cases on Log-In.
          </div>
      
        <Link to='/login'>  <button className="logout"  >Log-In</button>
</Link>
</>
)}
      
        </div>
      </div>
    </div>
  )
}

export default Home