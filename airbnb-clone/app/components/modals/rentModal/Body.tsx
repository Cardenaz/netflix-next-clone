'use client';
import React from "react";
import { STEPS } from "../RentModal";

 

interface BodyProps {
    step: number
}

const Body: React.FC<BodyProps> = ({
    step, 
}) => {

    switch (step) {
        case STEPS.CATEGORY:
        return <div></div>
    
        default:
            return <div> </div>
                    
    }

}


export default Body; 