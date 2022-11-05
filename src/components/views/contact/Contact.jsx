import React from 'react';
import { someImages, someImgArr } from '../../../images/some';

const Contact = () => {
    
  return (
    <div className='contact view'>
        <h2>Conctact us...</h2>
        <h3>Victor:</h3>
        <div className="oneSome">
            <img src={someImages["mail"]} alt="some"  className="someLogo"/>
            <a target="blank" href="victorgrinan@gmail.com">Mail</a>
        </div>
        <div className="oneSome">
            <img src={someImages["instagram"]} alt="some"  className="someLogo"/>
            <a target="blank" href="https://www.instagram.com/victor_grinan_dev">Instagram</a>
        </div>
        <div className="oneSome">
            <img src={someImages["github"]} alt="some"  className="someLogo"/>
            <a target="blank" href="https://github.com/Victor-Grinan-Dev">Github</a>
        </div>
        <div className="oneSome">
            <img src={someImages["linkedin"]} alt="some"  className="someLogo"/>
            <a target="blank" href="https://www.linkedin.com/in/victor-gri%C3%B1an">Linkedin</a>
        </div>
        <h3>Vitali:</h3>
        <div className="oneSome">
            <img src={someImages["mail"]} alt="some"  className="someLogo"/>
            <a target="blank" href="victorgrinan@gmail.com">Mail</a>
        </div>
        <div className="oneSome">
            <img src={someImages["github"]} alt="some"  className="someLogo"/>
            <a target="blank" href="">Github</a>
        </div>
        <div className="oneSome">
            <img src={someImages["linkedin"]} alt="some"  className="someLogo"/>
            <a target="blank" href="">Linkedin</a>
        </div>
        <h3>Sonja :</h3>
        <div className="oneSome">
            <img src={someImages["mail"]} alt="some"  className="someLogo"/>
            <a target="blank" href="">Mail</a>
        </div>
        <div className="oneSome">
            <img src={someImages["github"]} alt="some"  className="someLogo"/>
            <a target="blank" href="">Github</a>
        </div>
        <div className="oneSome">
            <img src={someImages["linkedin"]} alt="some"  className="someLogo"/>
            <a target="blank" href="">Linkedin</a>
        </div>
        
   
       
    </div>
  )
}

export default Contact;

/*
<div className="oneSome">
            <img src={someImages["facebook"]} alt="some"  className="someLogo"/>
            <a target="blank" href="">Facebook</a>
        </div>
        <div className="oneSome">
            <img src={someImages["youtube"]} alt="some"  className="someLogo"/>
            <a target="blank" href="">Youtube</a>
        </div>
 
        <div className="oneSome">
            <img src={someImages["whatsapp"]} alt="some"  className="someLogo"/>
            <a target="blank" href="">Whatsapp</a>
        </div>
        <div className="oneSome">
            <img src={someImages["twitter"]} alt="some"  className="someLogo"/>
            <a target="blank" href="">Twitter</a>
        </div>
*/