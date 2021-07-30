import React from 'react';
import logo1 from './logo1.png'
import './Footer.css'
const Footer = () => (
  <footer className="footer">
    <span className="footh2">Wascorp Digital</span>
    <span className="footh3">Copyright 2021</span> 
    <span className="footh4"> <img src={logo1}  alt="img" style={{width:'150px'}}/></span>
    
  </footer>
);
  
export default Footer;