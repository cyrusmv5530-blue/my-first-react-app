
function SubHead({subHead, background}){
  return(
    
    <header className = {`flex gap-4 justify-center shadow-xl/10 ${background} p-6 m-4 mt-12`}>
      <h1 className = "font-extrabold font-fred text-center text-4xl text-[#172a3a]">{subHead}</h1>
    </header>
  );
}   

export default SubHead;