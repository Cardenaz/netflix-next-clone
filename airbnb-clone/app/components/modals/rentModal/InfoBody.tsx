'use client';
import React from "react";
import Heading from "../../Heading";
import Counter from './Counter'; 
 
interface InfoBodyProps {
    guestCount: number, 
    setCustomValue: (id: string, value: any) => void
}

const InfoBody: React.FC<InfoBodyProps> = ({
    guestCount, 
    setCustomValue
}) => {
    return (<div className="flex flex-col gap-8">

        <Heading 

        title="Share some basics about your place"
        subtitle="What amenities do you have?"
        
        
        />

        <Counter 

            title="Guests"
            subtitle="How many guests do you allow?" 
            value={guestCount} 
            onChange={(value) => setCustomValue('guestCount', value)}
        
                  

        
        />




    </div>); 
}

export default InfoBody; 