import React, { useState } from 'react'

const ControlledTextArea = () => {
    const [comments,setComments] = useState('');
    const handleCommentChange = (event)=>{
        setComments(event.target.value);
    }

  return (
    <form>
        <label>Comments</label>
        <textarea 
        value={comments}
        onChange={handleCommentChange}
        >

        </textarea>
    </form>
  )
}

export default ControlledTextArea