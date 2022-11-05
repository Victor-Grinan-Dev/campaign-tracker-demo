import React from 'react';
import Logo from '../../ui_components/Logo';

const Login = () => {
  return (

    <div className='login-container'>
      <Logo/>
        <form >
          <div>
          <input type="text" name="username" />
          </div>
          <div>
          <input type="text" name="password" />
          </div>
          <button>Login</button>
        </form>
    </div>

  )
}

export default Login