import React, { useEffect, useState } from "react";
import { addDoc, collection, updateDoc,doc } from "firebase/firestore";
import { db } from "./firebase";
import {useNavigate} from "react-router-dom";


function CreatePost({edit, setEdit}) {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const[image, setImage] = useState("");
  const [link, setLink] = useState("");
  

  let navigate= useNavigate();
  const postsCollectionRef = collection(db, "Posts");
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      post,
      image,
      link,
    
    });
    
navigate("/posts");
  };


  

 
  
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create Post</h1>
        <div className="inputGp">
          <label>Title: </label>
          <input 
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)} required
          />
        </div>

        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="post..."
            onChange={(e) => setPost(e.target.value)} required
          />
        </div>
        <div className="inputGp" >
          <label>Image Url : </label>
          <input type="url"
           onChange={(e) => setImage(e.target.value)}></input>
        </div>

        <div className="inputGp" >
          <label>Podcast Link: </label>
          <input type="url"
           onChange={(e) => setLink(e.target.value)}></input>
        </div>

<button onClick={createPost}>Submit post</button>
     
      </div>

    </div>
  );
}

export default CreatePost;
