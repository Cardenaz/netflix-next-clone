'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Heading from "../../Heading";
import Input from "../../inputs/Input";

interface PriceBodyProps {
    isLoading: boolean, 
    register: UseFormRegister<FieldValues>
    errors: FieldErrors<FieldValues>
}


const PriceBody: React.FC<PriceBodyProps> = ({
    isLoading, 
    register, 
    errors
}) => {

    return (<div className="flex flex-col gap-8">

        <Heading 
        title="Now, set your price "
        subtitle="How much do you charge per night?"
        />

     <Input 

     id="price"
     label="Price"
     formatPrice
     type="number"
     disabled={isLoading}
     register={register}
     errors={errors}
     required
     
     />


    </div>); 



}

export default PriceBody;  