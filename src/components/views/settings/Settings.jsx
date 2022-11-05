import React from 'react';

const Settings = () => {
  return (
    <div className='settings view'>
        <div>
            <h3>Mail otifications:</h3>

            <div> - Incoming message: <input type="checkbox" name="msg" /></div>
            <div> - New Campaign available : <input type="checkbox" name="avaCamp" /></div>
            <div> - Campaing result ready: <input type="checkbox" name="camRes" /></div>
            <div> - Turn is about to end: <input type="checkbox" name="endTurn" /></div>
        </div>
            <br />
        <div>
            <h3>Danger Zone:</h3>
            <button>Delete account</button>
        </div>
       
    </div>
  )
}

export default Settings;