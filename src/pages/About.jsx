import AboutCard from '../assets/components/AboutCard'
import mypic from '../assets/react.svg'

function About() {
    return (
  <>
  <AboutCard myTitle="CEO" mySubtitle="im excited to graduate" text="text here" img1={mypic} img2={mypic}/>
  <h1>About Page</h1>
  <p>my name is cyrus morgan vongphachanh</p>
</>
  )
};

export default About;
