import React from 'react';
import HOTWButton from '../../ui_components/HOTWButton';
import Gates from '../../ui_components/Gates';
import Logo from '../../ui_components/Logo';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setIsLogged } from '../../../features/portalSlice';
import { User } from '../../../classes/user';

const testUser = new User("Victor", "Victor123");
testUser.type = "admin";

const Login = () => {
  const dispatch = useDispatch();

const handleSubmit = () => {
  dispatch(setCurrentUser(testUser))
   dispatch(setIsLogged(true));
}

  return (

    <div className='login-container'>
      <div className='welcome'>
        <p>Welcome to the "Campaing Tracker App".</p> 

        <Logo/>
        <Gates/>
               
      </div>
      <div>
      <form >
          <div>
          <input type="text" name="username" placeholder='Username...'/>
          </div>
          <div>
          <input type="text" name="password" placeholder='Password...'/>
          </div>
          < HOTWButton caption={"Login"} action={handleSubmit}/>
        </form>
        <br />
        <p>More...</p>

      </div>
    </div>

  )
}

export default Login;