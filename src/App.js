import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import Login from "./Login";
import { signOut } from "firebase/auth";

import { auth } from "./firebase";
import Home from "./Home";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [edit, setEdit] = useState(false);

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((show) => !show);
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };

  return (
    <div className="App">
      <Router>
 
<Navbar toggle={toggle}/>
<Sidebar show={show} toggle={toggle} isAuth={isAuth} signUserOut={signUserOut}/>
     

        <Routes>
          <Route exact path="/" element={<Home  isAuth={isAuth}/>}></Route>
          <Route exact path="/posts" element={<Posts isAuth={isAuth} />} />

          <Route
            exact
            path="/login"
            element={<Login setIsAuth={setIsAuth} />}
          />
          <Route
            exact
            path="/createpost"
            element={<CreatePost isAuth={isAuth} edit={edit} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
