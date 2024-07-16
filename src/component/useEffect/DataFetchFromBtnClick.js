import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetchFromBtnClick = () => {
  // const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [ID, setID] = useState(1);
  const [IDFromButtonClick, setIDFromButtonClick] = useState(1);
  const handleClick = () => {
    setIDFromButtonClick(ID);
  };

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${ID}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => console.log(`Error Fetching data : ${error}`));
  }, [IDFromButtonClick]);

  return (
    <div>
      <h1>Posts:</h1>
      {/* 
    <ul>
        {posts ? (posts.map( post => (<li key={post.ID} >{post.title}</li>))) : (<p>Loading...</p>) }
    </ul> */}

      <input
        type="text"
        value={ID}
        onChange={(e) => setID(e.target.value)}
      ></input>
      <div>
        <button type="button" onClick={handleClick}>
          Fetch Post
        </button>
        <h1>Post</h1>
        {post ? <p>{post.title}</p> : <p>Loading...</p>}
      </div>
    </div>
  );
};
/* 
Explanation and Testing :---

--> Controlled Input: Input field (ID) allow karta hai users ko desired post ID enter karne ke liye.

--> Button Click: "Fetch Post" button trigger karta hai handleClick function, jo IDFromButtonClick ko update karta hai current value of ID se.

 --> Effect Dependency: useEffect hook ab IDFromButtonClick pe depend karta hai, ensure karta hai ki yeh data fetch tabhi karta hai jab button click hota hai.

--> Testing: Browser mein verify karo ki button click karne par corresponding post title display ho based on entered ID.

*/
export default DataFetchFromBtnClick;
