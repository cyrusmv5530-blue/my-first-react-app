function Dedication({text, background}){
  return(
    
      <>
      <div className = {`flex-1 ${background} border-l-2 border-r-2 border-l-accent3 border-r-accent3 text-text p-6 mb-18`}> 
      <h2 className = "font-sgummy text-3xl">{text}     
      </h2>
      </div>
      </>
  );
}

export default Dedication;