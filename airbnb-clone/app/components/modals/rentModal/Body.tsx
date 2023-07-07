'use client';
import React from "react";
import { STEPS } from "../RentModal";
import CategoryBody from "./CategoryBody";
import LocationBody from "./LocationBody";
import InfoBody, { InfoBodyProps } from "./InfoBody";
import ImageBody from "./ImageBody";
import DescriptionBody, { DescriptionBodyProps } from "./DescriptionBody";
import PriceBody from "./PriceBody";

 

interface BodyProps {
    step: number, 
    setCustomValue: (id: string, value: any) => void
    category: any, 
    location: any, 
    infoBody: InfoBodyProps
    descriptionBody: DescriptionBodyProps
}



const Body: React.FC<BodyProps> = ({
    step, 
    setCustomValue, 
    category, 
    location, 
    infoBody, 
    descriptionBody
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

        case STEPS.IMAGES: 
        return <ImageBody 
        
        />

        case STEPS.DESCRIPTION: 
        return <DescriptionBody 
        isLoading={descriptionBody.isLoading}
        register={descriptionBody.register}
        errors={descriptionBody.errors}
        />

        case STEPS.PRICE: 
        return <PriceBody

        isLoading={descriptionBody.isLoading}
        register={descriptionBody.register}
        errors={descriptionBody.errors}
        
        />
    
        default:
            return <div>{step} </div>
                    
    }

}


export default Body; 