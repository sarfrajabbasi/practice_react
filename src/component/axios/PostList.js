import React, { useEffect, useState } from "react";
import axios from "axios";
import './style/style.css'

const PostList = () => {
  const [posts, setPost] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/post")
      .then((response) => setPost(response.data))
      .catch((error) => setErrorMessage("Error retrieving data"));
  }, []);
  return (
    <div>
      <h1>List of Posts</h1>
      {
        posts.length > 0 ? (posts.map((post=> <div key= {post.id}>{post.title}</div> ))) : (<div className="nopost">No Post Available</div>)
      }
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default PostList;
