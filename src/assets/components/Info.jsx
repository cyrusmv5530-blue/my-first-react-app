function Info({title, info,}){
  return(
    
      <>
      <div className='p-6 m-4'>
      <h1 className='font-bold font-fred text-center text-4xl text-text bg-primaryBox border-primaryBox'>{title}</h1>
      <h2 className='font-sgummy text-2xl bg-mainBg border-2 border-mainBg rounded-b-md'>{info}
      </h2>
      </div>
      </>
  );
}

export default Info;