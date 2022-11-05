import React from 'react';

const Post = () => {
  return (
    <div className='post view'>
        <input type="text" placeholder='Title...' style={{
            width:"298px"
        }}></input>
        <input type="text" placeholder='Image Url...' style={{
            width:"298px"
        }}></input>
        <textarea name="text" id="" cols="20" rows="10" placeholder='Text...' style={{
            width:"300px",
            height: "450px"
        }}></textarea>
        <button>Post</button>
    </div>
  )
}

export default Post;