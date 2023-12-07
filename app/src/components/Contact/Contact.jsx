import React from 'react';
import './contact.css';
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";

const Contact = () => {
  return (
    <div className='contact-container' id="contact"> 
     <h1>Contact-me !</h1>
     <div className='contact-info'>
        <div className='email'>
        <IoIosMailUnread className='icon'/>
            <h3>oumou.diakhabyd@outlook.fr</h3>
        </div>
        <div className='numero'>
        <FaPhoneVolume className='icon'/>

            <h3>+33 6 23 13 40 85</h3>
     </div>
     </div>

 

    </div>
  )
}

export default Contact