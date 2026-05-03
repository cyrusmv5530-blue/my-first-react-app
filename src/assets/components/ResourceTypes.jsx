import { Link } from "react-router-dom";


function ResourceTypes({Resource, RDesc, icon, RLink}){
  return(
    
      <>
      <div className="flex-1 hover:scale-101 hover:shadow-xl/10 shadow-xl/5 p-6 m-4 mb-12 bg-mainBg border-accent3 border">
        <div class = "flex justify-center">
      <img src={icon} alt="picture" width = "200"></img>
        </div>
      <br/>
      <div className = "text-center">
      <Link to={RLink} className='inline-block relative font-bold font-fred text-4xl text-text hover:text-hover1 hover:border-b-hover1 hover:border-b-4 m-4'>{Resource}
      </Link>  
      </div>
      <h2 className='font-sgummy text-2xl text-text '>{RDesc}
      </h2>
      </div>
      </> 
  );
}

export default ResourceTypes;