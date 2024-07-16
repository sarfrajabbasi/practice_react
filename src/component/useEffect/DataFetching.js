import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  // const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [ID, setID] = useState(1);

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${ID}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data)
      })
      .catch((error) => console.log(`Error Fetching data : ${error}`));
  }, [ID]);

  return <div>
    <h1>Posts:</h1>
   {/* 
    <ul>
        {posts ? (posts.map( post => (<li key={post.ID} >{post.title}</li>))) : (<p>Loading...</p>) }
    </ul> */}

    <input type="text"
    value={ID}
    onChange={(e)=> setID(e.target.value)}></input>
    <div>
      <h1>Post</h1>
      {post ? <p>{post.title}</p> :<p>Loadding...</p>}
    </div>
  </div>;
};

export default DataFetching;
