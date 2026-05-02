import Header from "../assets/components/Header";
import ResourceTypes from "../assets/components/ResourceTypes";
import food from "../assets/images/Food.png";
import shelter from "../assets/images/Shelter.png";
import rehab from "../assets/images/Rehab.png";
import Footer from "../assets/components/Footer";
import logo2 from "../assets/images/logo2.svg"
import Info from "../assets/components/Info"
import Banner from "../assets/components/Banner"
import SubHead from "../assets/components/SubHead"
import Info2 from "../assets/components/Info2"
import Quote from "../assets/components/Quote"
import Dedication from "../assets/components/Dedication"




function Home() {
  return (
  <>
  <Header page = "A Home. A Future. A Community. Ending Homelessness. Together."/> 
  <SubHead subHead = "Resource Maps" background = "bg-position-[15%_53%] bg-size-[110%] bg-no-repeat bg-[url('https://i.imgur.com/6jlfM02.png')] bg-center"/>
  <div className = "flex gap-4">
  <ResourceTypes Resource="Food" RDesc="This is the resource map for places you can find food around Oakland." icon={food} RLink="/food"/>
  <ResourceTypes Resource="Shelter" RDesc="This is the resource map for places you can find shelter around Oakland." icon={shelter} RLink="/shelter"/>
  <ResourceTypes Resource="Rehabilitation" RDesc="This is the resource map for places you can find rehabilitation programs in Oakland." icon={rehab} RLink="/rehab"/>
  </div>  
  <Banner head = "34,000+" subHead = "homeless people in the Bay Area"/>
  <Quote quote = "“Don't be person that drives past a homeless man, be the one that stops and gives them money”" person = "-Angelina Liu" background = "bg-position-[15%_40%] bg-size-[110%] bg-no-repeat bg-[url('https://wallpapercave.com/wp/wp2777447.jpg')] bg-center"/>
  <SubHead subHead = "Our Goals" background = "bg-primaryBox"/>
  <div className = "flex justify-between">
  <Info2 title = "1" info = "Provide the homeless population directions to find open food drives, available housing, and rehabilitation centers, found all in one easily navigable app."/>
  <Info2 title = "2" info = "Get more homeless people off the streets, as many struggle with an inability to find resources available to them."/>
  <Info2 title = "3" info = "Help rehabilitate the homeless population who struggle with substance abuse and mental health issues."/>
  </div>
  <Banner head = "69%" subHead = "of the homeless population have a physical or mental disability"/>
  <Quote quote = "“We cannot push homeless camps from place to place, we must PROVIDE them a home”" person = "-Violet Yu" background = "bg-position-[15%_73%] bg-size-[110%] bg-no-repeat bg-[url('https://cdn.pixabay.com/photo/2017/02/16/19/47/bokeh-2072271_1280.jpg')] bg-center"/>
  <Dedication text = "This website is in dedication to my girlfriend who inspires me to work hard and help people." background = "bg-mainBg"/>
  </>
  )
};

export default Home;
