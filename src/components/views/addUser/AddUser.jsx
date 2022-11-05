import React from 'react';

const AddUser = () => {
  return (
    <div className='addUser view'>

        <form >
            <div>
                <input type="text" name="username" placeholder="Username..." />
            </div>
            <div>
                <input type="email" name="email" placeholder="email..."/>
            </div>
            <div>
                <select name="type">
                    <option value="" hidden>Choose user type</option>
                    <option value="user" >user</option>
                    <option value="admin" >admin</option>
                </select>
            </div>
            <button>create</button>
        </form>
        
    </div>
  )
}

export default AddUser;