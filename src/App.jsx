import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Food from "./pages/RPages/Food";
import Shelter from "./pages/RPages/Shelter";
import Rehab from "./pages/RPages/Rehab";
import MapSelect from "./pages/MapSelect";
import seal from "./assets/images/seal1.png";
import profile from "./assets/images/profile.svg";
import logo2 from "./assets/images/logo2.svg";
import ContactUs from "./assets/components/InputFields/ContactUs"
import SignIn from "./assets/components/InputFields/SignIn"
import Footer from "./assets/components/Footer"







export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const [signOpen, setSignOpen] = useState(false)
  const [user, setUser] = useState(
JSON.parse(localStorage.getItem("user"))
  )

  return (
    <>
  
<div className="bg-mainBg min-h-screen">

      <div className = "flex z-500 p-4 bg-accent sticky top-0" >
        <div className = "flex items-center justify-start gap-10">
        <img src={logo2} alt="picture" width = "60"></img> 
      <nav className = "flex gap-10">
   
          <NavLink to="/" className = {({isActive}) => `font-fred text-2xl ${isActive ? "border-b-text border-b-5 text-text" : "text-text hover:text-hover1"}`}>Home</NavLink> 
    
       
          <NavLink to="/about" className = {({isActive}) => `font-fred text-2xl ${isActive ? "border-b-text border-b-5 text-text" : "text-text hover:text-hover1"}`}>About</NavLink>
        
        
       
     

       
          <NavLink to="/MapSelect" className = {({isActive}) => `font-fred text-2xl ${isActive ? "border-b-text border-b-5 text-text" : "text-text hover:text-hover1"}`}>Map</NavLink>
       
      </nav> 
      </div>
      <div className = "flex z-200 items-center ml-auto gap-10 m-4 text-text hover:text-hover1 font-fred text-2xl ">
        {user ?(<button onClick={() => {localStorage.removeItem("user"); setUser(null);}}>Logout</button>)
         : (<button onClick={() => setSignOpen(true)}>Sign In</button>)}
        {user ?(<Link  to="/profile"><img src = {profile} alt = "profile" width = "40"/></Link>) : (<img src = {profile} alt = "profile" width = "40"/>)}



      
      </div> 
      
      </div> 
          {contactOpen && <ContactUs contactOpen = {contactOpen} setContactOpen = {setContactOpen}/>}
          {signOpen && <SignIn signOpen = {signOpen} setSignOpen = {setSignOpen} setUser = {setUser}/>}



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/food" element={<Food />} />
        <Route path="/shelter" element={<Shelter />} />
        <Route path="/rehab" element={<Rehab />} />
        <Route path="/MapSelect" element={<MapSelect />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

    <Footer setContactOpen = {setContactOpen}/>

    </div>
      

   
    </>
  );
}


