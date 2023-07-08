import Image from "next/image";
import React from "react";

const Futurama: React.FC = () => {

    return (<div className="
    min-h-screen
    flex
    flex-col
    items-center
    justify-center
    "
    
    >  
    <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover ">

      


    </video>
    <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Margelo</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
            <span>App Development, </span>{' '}<span>done right.</span>
        </h2>
         </div>

         <div className="flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
            <Image src={"/images/chevron.png"}
            width={188/3} 
            height={105/3}
            alt="scroll down"
            />
            
            
             </div>
    
    
    </div>)
}


export default Futurama; 