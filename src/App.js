import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import Login from "./Login";

import Home from "./Home";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function App() {
 
  const [edit, setEdit] = useState(false);

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((show) => !show);
  };

 

  return (
    <div className="App">
      <Router>
 
<Navbar toggle={toggle}/>
<Sidebar show={show} toggle={toggle}/>
     

        <Routes>
          <Route exact path="/" element={<Home  />}></Route>
          <Route exact path="/posts" element={<Posts />} />

          <Route
            exact
            path="/login"
            element={<Login />}
          />
          <Route
            exact
            path="/createpost"
            element={<CreatePost edit={edit} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
