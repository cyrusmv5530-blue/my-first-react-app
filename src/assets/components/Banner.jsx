function Banner({head, subHead}){
  return(
    
      <>
      <div className = "bg-primaryBox border-accent3 border p-6 mt-12 mb-18">
      <h1 className ="font-bold font-fred text-center text-7xl text-text">{head}</h1>
      <h2 className = "font-fred text-3xl text-center text-text">{subHead}</h2>
      </div>
      </>
  );
}

export default Banner;