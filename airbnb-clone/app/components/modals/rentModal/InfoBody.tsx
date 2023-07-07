'use client';
import React from "react";
import Heading from "../../Heading";
import Counter from './Counter'; 
 
export interface InfoBodyProps {
    guestCount: number, 
    roomCount: number, 
    bathroomCount: number, 
    setCustomValue: (id: string, value: any) => void
}

const InfoBody: React.FC<InfoBodyProps> = ({
    guestCount, 
    roomCount, 
    bathroomCount, 
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

        <hr />
          <Counter 

                title="Rooms"
                subtitle="How many rooms do you have?" 
                value={roomCount} 
                onChange={(value) => setCustomValue('roomCount', value)}

                    


/>  
<hr />

            <Counter 

            title="Bathrooms"
            subtitle="How many bathrooms do you have?" 
            value={bathroomCount} 
            onChange={(value) => setCustomValue('bathroomCount', value)}

                


            />




    </div>); 
}

export default InfoBody; 