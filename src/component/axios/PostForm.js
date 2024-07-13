import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(formData);
    axios.post('https://jsonplaceholder.typicode.com/posts', formData).then(response => console.log(response)).catch(error=> console.log(error))

  }
  const { userId, title, body } = formData;
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>User ID :</label>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={changeHandler}
          ></input>
        </div>
        <div>
          <label>Title :</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={changeHandler}
          ></input>
        </div>
        <div>
             <label>Body :</label>
               <textarea 
               name="body"
               value={body}
               onChange={changeHandler}
               >
               </textarea>
            </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
