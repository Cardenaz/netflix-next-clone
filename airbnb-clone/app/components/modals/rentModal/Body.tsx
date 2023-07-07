'use client';
import React from "react";
import { STEPS } from "../RentModal";
import CategoryBody from "./CategoryBody";
import LocationBody from "./LocationBody";
import InfoBody, { InfoBodyProps } from "./InfoBody";

 

interface BodyProps {
    step: number, 
    setCustomValue: (id: string, value: any) => void
    category: any, 
    location: any, 
    infoBody: InfoBodyProps
}



const Body: React.FC<BodyProps> = ({
    step, 
    setCustomValue, 
    category, 
    location, 
    infoBody
}) => {

    switch (step) {
        case STEPS.CATEGORY:
        return <CategoryBody 

        setCustomValue={setCustomValue}
        category={category}
        
        />

        case STEPS.LOCATION: 
        return <LocationBody 

        location={location}
        setCustomValue={setCustomValue}

        
        />

        case STEPS.INFO: 
        return <InfoBody 
        guestCount={infoBody.guestCount}
        roomCount={infoBody.roomCount} 
        bathroomCount={infoBody.bathroomCount}
        setCustomValue={setCustomValue}
        
        />
    
        default:
            return <div>{step} </div>
                    
    }

}


export default Body; 