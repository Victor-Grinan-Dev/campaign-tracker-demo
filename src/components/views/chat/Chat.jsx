import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Msg } from '../../../classes/msg';

//const reciver = "all";
//const search = "";

const Chat = () => {
    const [text, setText] = useState();
    const user = useSelector(state => state.portal.currentUser);
    
    const postMsg = () => {
        const newMsg = new Msg(user.username, text);
        console.log(newMsg)
    }

  return (
    <div className='chat view'>
        <div className="area">

          <select name="reciver" >
            <option value="">All</option>
            <option value="">user 1</option>
            <option value="">user 2</option>
            <option value="">user 3</option>
          </select>
          
          <div className="chatbox">
          </div>
          
        <div className="textInput" >
            <input type="text" onChange={(e) => setText(e.target.value)} style={{
              width:"70%px"
            }}/><button onClick={postMsg}>send</button>
        </div>
        </div>
    </div>
  )
}

export default Chat;