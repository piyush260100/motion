import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import motion_logo from "./logo3.gif";
import profile_logo from "./man-nodding.gif";

export default function Navbar() {

    const [show,handleShow]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>90){
                handleShow(true);
            }else handleShow(false);
        });

        return()=>{
            window.removeEventListener("scroll")
        }
    },[]);
 
 
 return <div className={`navbar ${show && "navbar-black"}`}>

  <img src={motion_logo} alt="logo" className='nav-logo'></img>
  <h1 style={{color:"white", marginLeft:"60px", fontFamily :"cursive",fontWeight:"bold"}}>Motion</h1>

  <img src={profile_logo} alt='profile_logo' className='nav-avatar'></img>

  </div>;
}
