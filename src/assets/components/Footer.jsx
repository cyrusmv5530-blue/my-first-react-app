import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {useState} from "react";
import IIcon from '../images/IIcon.svg';
import FIcon from '../images/FIcon.svg';
import TIcon from '../images/TIcon.svg';
import YIcon from '../images/YIcon.svg';
import LIcon from '../images/LIcon.svg';






export default function Footer({setContactOpen}){
    
  return(
    <>
    <footer className = 'bg-accent'>

    <div class = "flex gap-40 p-4 ml-4">

      <div className = 'flex flex-col items-center'>
      <h1 className = 'font-bold font-sgummy  text-center text-xl text-text'>
        Pages
      </h1>
      <ul className = 'font-sgummy text-center text-text2'>
        <li className = 'hover:text-hover1'><Link to = "/food">Food</Link></li>
        <li className = 'hover:text-hover1'><Link to = "/shelter">Shelter</Link></li>
        <li className = 'hover:text-hover1'> <Link to = "/rehab">Rehab</Link></li>
      </ul>
      </div>

      <div className = 'flex flex-col items-center'>
      <h1 className = 'font-bold font-sgummy text-center text-xl text-text'>
        Company
      </h1>
      <ul className = 'font-sgummy text-center text-text2'>
        <li className = 'hover:text-hover1'><Link to = "/about" >About Us</Link></li>
        <li className = 'hover:text-hover1'><Link to = "/profile" >Profile</Link></li>
        <li className = 'hover:text-hover1' onClick={() => setContactOpen(true)} >Contact Us</li>
      </ul>


      </div>

      <div className = 'flex flex-col items-center'>
      <h1 className = 'font-bold font-sgummy text-center text-xl text-text'>
        Charitable Organzitions
      </h1>
      <ul className = 'font-sgummy text-center text-text2'>
        <li className = "hover:text-hover1"><a href = "https://www.eocp.net/">East Oakland Community Project</a></li>
        <li className = "hover:text-hover1"><a href = "https://homelessactioncenter.org/">Homeless Action Center</a></li>
        <li className = "hover:text-hover1"><a href = "https://www.covenanthouse.org/homeless-shelters/oakland-california">Covenant House</a></li>
        <li className = "hover:text-hover1"><a href = "https://www.cityteam.org/give-help/oakland">City Team</a></li>
        <li className = "hover:text-hover1"><a href = "https://operationdignity.org/">Operation Dignity</a></li>
        <li className = "hover:text-hover1"><a href = "https://www.svdp-alameda.org/">St. Vincent de Paul</a></li>
        <li className = "hover:text-hover1"><a href = "https://oakehouse.org/">Oakland Elizabeth House</a></li>
        <li className = "hover:text-hover1"><a href = "https://www.bayarearescue.org/">Bay Area Rescue Mission</a></li>
        <li className = "hover:text-hover1"><a href = "https://rootscommunityhealth.org/">Roots Community Health</a></li>
      </ul>
      </div>

      </div>



      <div class = "flex gap-2 justify-end p-4">
     <a href = "https://www.instagram.com/" className = "hover:opacity-75">
        <img src={IIcon} class = "h-auto max-w-lg rounded-lg" alt = "Instagram"></img>
     </a>

     <a href = "https://www.facebook.com/" className = "hover:opacity-75">
        <img src={FIcon} class = "h-auto max-w-lg rounded-lg" alt = "Instagram"></img>
     </a>
     
     <a href = "https://www.youtube.com/" className = "hover:opacity-75">
        <img src={YIcon} class = "h-auto max-w-lg rounded-lg" alt = "Instagram"></img>
     </a>

     <a href = "https://www.x.com/" className = "hover:opacity-75">
        <img src={TIcon} class = "h-auto max-w-lg rounded-lg" alt = "Instagram"></img>
     </a>

     <a href = "https://www.linkden.com/" className = "hover:opacity-75">
        <img src={LIcon} class = "h-auto max-w-lg rounded-lg" alt = "Instagram"></img>
     </a>
     </div>


    </footer>      
    </>

  );
}

