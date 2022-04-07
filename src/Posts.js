import React, { useEffect, useState } from "react";

import {
  doc,
  collection,
  deleteDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Posts({ isAuth}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [postLists, setPostLists] = useState([]);
 
  
  

  const postsCollectionRef = collection(db, "Posts");
  let navigate= useNavigate();
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  

  const deletePost = async (id) => {
    const postDoc = doc(db, "Posts", id);
    await deleteDoc(postDoc);
  };

  const updateLike = async (id, like) => {
    const postDoc = doc(db, "Posts", id);
    const newLikes = { like: like + 1 };
    await updateDoc(postDoc, newLikes);
  };

  return (
    <div className="postsPage">
      <input
        className="searchBar"
        placeholder="Search.."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      ></input>
      {postLists
        .filter((post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )

        .map((post) => {
          return (
            <div className="post">
              <div className="postHeader">
                <div className="title">
                  <h1>{post.title}</h1>
                </div>

                

                <div className="deletePost">
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      &#128465;
                    </button>
                  )}
                </div>
              </div>
              <div className="postCt">
                <div className="imageCt">
                  <img className="image" src={post.image}></img>{" "}
                </div>
                <div className="postTextContainer">{post.post}</div>
              </div>
              <br></br>
              <div style={{color:"white"}}>
                Listen Now :
                <a className="link" href={post.link} target="_blank">
                  {post.link}
                </a>
              </div>
              <div className="footer">
                <div
                  className="like"
                  onClick={() => {
                    updateLike(post.id, post.like);
                  }}
                >
                  🤍{post.like}
                </div>
                <h3>posted by:{post.author.name}</h3>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Posts;
