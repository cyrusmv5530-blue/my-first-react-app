import Header from "../assets/components/Header";
import AboutCard from "../assets/components/AboutCard";
import mypic from "../assets/images/seal1.png";
import Footer from "../assets/components/Footer";
import ProfileCard from "../assets/components/ProfileCard";
import { useEffect } from "react";




function Profile() {
 
  return (
    
    
  <>
  <Header page="Profile"/>
  <ProfileCard img1 = {mypic} img2 = {mypic}/>
  
</>
  )
};

export default Profile;
