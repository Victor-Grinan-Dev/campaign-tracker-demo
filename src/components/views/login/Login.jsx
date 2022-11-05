import React from 'react';
import Logo from '../../ui_components/Logo';

//images
const visitor = "https://source.unsplash.com/R_6kw7NUTLY";
const admin = "https://source.unsplash.com/BoISbSP0HVk";
const user = "https://source.unsplash.com/1vC4ZwkJNdA";

const Login = () => {
  return (

    <div className='login-container'>
      <div className='welcome'>
        <p>Welcome to the "Campaing Tracker App".</p> 
        <Logo/>

        <div className="gates">
          <img className="gate" src={visitor} alt="visitor" />
          <img className="gate" src={admin} alt="admin" />
          <img className="gate" src={user} alt="user" />
        </div>
        
               
      </div>
      <div>
      <form >
          <div>
          <input type="text" name="username" placeholder='Username...'/>
          </div>
          <div>
          <input type="text" name="password" placeholder='Password...'/>
          </div>
          <button>Login</button>
        </form>
        <br />
        <p>More...</p>

      </div>
    </div>

  )
}

export default Login;

/*
              
            
            </header>

            <div className={css.gates}>
                <div className={css.gateContainer}>
                <p className={css.userGate}>Visitor:</p>
                <img className={css.gate} src={visitor} alt="visitor" onClick={inComingVisitorHandler}/>
                </div>
            
                <div className={css.gateContainer}>
                <p className={css.userGate}>Admin:</p>
                <img className={css.gate} src={admin} alt="admin" />
                </div>
           
                <div className={css.gateContainer}>
                <p className={css.userGate}>User: </p>
                <img className={css.gate} src={user} alt="user" onClick={inComingUserHandler}/>
                </div>
*/