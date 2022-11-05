import React from 'react';
import { someImages, someImgArr } from '../../../images/some';

const Contact = () => {
    
  return (
    <div className='contact view'>
     
     
        <div className="oneSome">
            <img src={someImages["instagram"]} alt="some"  className="someLogo"/>
            <a href="">Instagram</a>
        </div>
        <div className="oneSome">
            <img src={someImages["github"]} alt="some"  className="someLogo"/>
            <a href="">Github</a>
        </div>
        <div className="oneSome">
            <img src={someImages["linkedin"]} alt="some"  className="someLogo"/>
            <a href="">Linkedin</a>
        </div>
        <div className="oneSome">
            <img src={someImages["facebook"]} alt="some"  className="someLogo"/>
            <a href="">Facebook</a>
        </div>
        <div className="oneSome">
            <img src={someImages["youtube"]} alt="some"  className="someLogo"/>
            <a href="">Youtube</a>
        </div>
        <div className="oneSome">
            <img src={someImages["mail"]} alt="some"  className="someLogo"/>
            <a href="">Mail</a>
        </div>
        <div className="oneSome">
            <img src={someImages["whatsapp"]} alt="some"  className="someLogo"/>
            <a href="">Whatsapp</a>
        </div>
        <div className="oneSome">
            <img src={someImages["twitter"]} alt="some"  className="someLogo"/>
            <a href="">Twitter</a>
        </div>
   
       
    </div>
  )
}

export default Contact;