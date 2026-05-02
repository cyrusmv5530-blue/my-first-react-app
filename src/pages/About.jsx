import Header from "../assets/components/Header";
import mypic from "../assets/images/seal1.png";
import OurMission from "../assets/components/OurMission";
import Footer from "../assets/components/Footer";
import Info from "../assets/components/Info";
import Info2 from "../assets/components/Info2";

import SubHead from "../assets/components/SubHead";
import AboutCard from "../assets/components/AboutCard"



function About() {
    return (
  <>
  <Header page="About"/>
  <br/>
  <br/>
  <OurMission/> 
  <SubHead subHead = "Our Story" background = "bg-primaryBox"/>
  <Info2 title = "" info = "As Oakland natives we wanted to create a project that could help our community with one of its biggest issues: homelessness. After witnessing the crushing effects of homelessness, we felt that we had to help in any way that we could. We lived near the giant, former homeless encampment at Mosswood Park and seeing it always left us disheartened. There were men, women, and children of all ages and it was a very sad sight. Eventually, it was cleared by the city which just pushed the homeless people to another area of Oakland, without solving the problem. We hope that educating the homeless on resources that they can use will help their overall quality of life and get them off the streets permanently."/>


  <AboutCard myTitle="Cyrus" mySubtitle="Project Leader" text="I am a senior at Oakland Technical High School and I am 17 years old. I have lived in Oakland all my life and witnessed the effect that homelessness has had on my city. I wanted to dedicate this website to providing resources to the homeless population because I believe it is one of the biggest issues gripping our community. " img1={mypic} img2={mypic}/>
 
    

  
</>
  )
};

export default About;
