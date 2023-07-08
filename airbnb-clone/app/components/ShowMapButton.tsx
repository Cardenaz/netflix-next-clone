'use client';
import { useState } from "react";
import { TbMap, TbMap2 } from "react-icons/tb";
import useShowMap from "../hooks/useShowMap";


interface Props {
    actionLabel: string
 }
 

const ShowMapButton: React.FC<Props> = ({
    actionLabel
}) => {

    const [showMap, setShowMap] = useState(true); 

    const useMap = useShowMap(); 

    

    return (<button 
       
        onClick={() => setShowMap(!showMap)}
  className='bg-black 
    px-7
    py-4
    rounded-full
    hover:scale-105
    transition
    flex 
    flex-row 
    items-center 
    gap-2 
    text-white font-semibold text-xl'> 
    <p className="pt-2 pb-2">{showMap ? actionLabel : 'Show list'}</p>
    <TbMap2 size={30}/>


</button>)
}

export default ShowMapButton; 