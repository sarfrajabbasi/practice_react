import React, { useState } from 'react';

const ControlledForm = () => {
  const [username, setUsername] = useState('');
  const [comments, setComments] = useState('');
  const [topic, setTopic] = useState('react');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
  
  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  }

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Username: ${username}, Comments: ${comments}, Topic: ${topic}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input 
        type="text" 
        value={username} 
        onChange={handleUsernameChange} 
      />
      <br/>
      <label>Comments</label>
      <textarea 
        value={comments} 
        onChange={handleCommentsChange} 
      />
      <br/>
      <label>Topic</label>
      <select 
        value={topic} 
        onChange={handleTopicChange} 
      >
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
      </select>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
