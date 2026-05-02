
function Header({page}){
  return(
    
    <header className = 'flex gap-4 justify-center z-450 shadow-xl/20 bg-primaryBox border border-accent3 rounded-md p-6 m-4'>
      <h1 className = 'font-extrabold font-fred text-center text-6xl text-[#172a3a]'>{page}</h1>
    </header>
  );
}

export default Header;