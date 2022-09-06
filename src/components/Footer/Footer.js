import React from 'react'
import "./Footer.css";

export const Footer = () => {
  return (
    <div className='footer'>
        <img  className='snorlax-footer' src={require("../../utils/assets/snorlax.png")} alt='pika-footer'></img>
    </div>
  )
}

export default Footer