function OurMission(){
  return(
    
      <>
<div className = "flex border-accent border shadow-xl/10">
      <div className= "w-1/2 bg-mainBg p-6 flex flex-col justify-center">
<h1 className = "font-bold font-sgummy text-center text-4xl text-text">Our Mission</h1>
      <h2 className = "font-sgummy text-text text-2xl p-4">Our mission is to help the homeless population who may not know where to find resources. Our app is designed to guide the homeless to resources like food drives, shelter and rehab centers.
      </h2>
      </div>
   <div className = "relative w-1/2">
      <div className = "absolute inset-0 bg-mainBg bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/1b/Macarthur_Maze%2C_early_1970s_%2821292861241%29.jpg')] bg-cover bg-center"></div>
      <div className = "absolute inset-0 bg-linear-to-r from-mainBg via-mainBg/70 to-transparent"></div>
  </div>
</div>
      </>
  );
}

export default OurMission;