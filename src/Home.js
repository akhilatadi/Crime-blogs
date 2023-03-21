import React from 'react'
import "./Home.css"

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="hero_container"  >
     
     
      <div className="content">
        <div className="content_items">
          <h1>Welcome to Mandy Salad Recipe Blogs</h1>


       
        <button style={{color:"black"}}><Link to="/posts" className="side_link">
         Posts
        </Link>
        </button> 


  
           
       
          <Link to="/posts" className="side_link">
         Posts
        </Link>

      
        </div>
      </div>
    </div>
  )
}

export default Home