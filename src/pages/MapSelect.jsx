import Header from "../assets/components/Header";
import MyMap from "../assets/components/MyMap"
import Popup from "../assets/components/InputFields/Popup"
import { useState } from "react";


export default function MapSelect(){
    const[type, setType] = useState("food");
    const[open, setOpen] = useState(false);


    return(
        <>

<div className = "relative w-full h-screen"> 
          <div className="absolute inset-0 z-0">
<MyMap key = {type} type = {type}/> 
</div>
            
<div className = "absolute top-0 left-0 w-full z-50">
     <Header page = "Map Selector"/>
</div>

<div className = "absolute bottom-4 left-4 z-50">
      <button
        onClick={() => setOpen(true)}
        className="font-sgummy text-text text-3xl bg-mainBg border border-transparent hover:bg-hover2 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base px-4 py-2.5">
        Map Type
      </button>
</div>
           
            <Popup
            open = {open}
            setOpen = {setOpen}
            setType = {setType}
            />

           

</div>

         </>
    )
    



}



