function Info2({title, info,}){
  return(
    
      <>
      <div className = "flex-1 bg-mainBg border-l-2 border-r-2 border-l-accent3 border-r-accent3 p-6 m-8 mb-18">
      <h1 className = "font-bold font-fred text-center text-4xl mb-4">{title}</h1>
      <h2 className = "font-sgummy text-3xl">{info}
      </h2>
      </div>
      </>
  );
}

export default Info2;