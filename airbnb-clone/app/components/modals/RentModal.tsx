'use client'; 

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal"
import { useMemo, useState } from "react";
import Heading from "../Heading";
import { categories } from "@/app/shared/domain/categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CountrySelect from "../inputs/CountrySelect";
import dynamic from "next/dynamic";
import InfoBody from "./rentModal/InfoBody";
import ImageBody from "./rentModal/ImageBody";
import DescriptionBody from "./rentModal/DescriptionBody";
import PriceBody from "./rentModal/PriceBody";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import CategoryBody from "./rentModal/CategoryBody";
import Body from "./rentModal/Body";

export enum STEPS { 
    CATEGORY = 0 , 
    LOCATION = 1, 
    INFO = 2,
    IMAGES = 3, 
    DESCRIPTION = 4, 
    PRICE = 5
}

const RentModal = () => {
    const router = useRouter(); 
    const rentModal = useRentModal(); 
    const [step, setSteps] = useState(STEPS.CATEGORY); 
    const [isLoading, setIsLoading] = useState(false); 
    const {register, handleSubmit, setValue, watch, formState: {
        errors
    }, 
    reset
} = useForm<FieldValues>({defaultValues:{
    category: '', 
    location: null, 
    guestCount: 1, 
    roomCount: 1, 
    bathroomCount: 1, 
    imageSrc: '', 
    price: 1, 
    title: '', 
    description: ''

}});

const category = watch('category'); 
const location = watch('location');
const guestCount = watch('guestCount'); 
const roomCount = watch('roomCount'); 
const bathroomCount = watch('bathroomCount'); 
const imageSrc = watch('imageSrc'); 

const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
        shouldDirty: true, 
        shouldTouch: true, 
        shouldValidate: true, 
    }); 
}

    const onBack = () => {
        setSteps((value) => value - 1); 
    }

    const onNext = () => {
        setSteps((value) => value +1); 
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if(step !== STEPS.PRICE) {
            return onNext(); 
        }

        setIsLoading(true); 

        axios.post('/api/listings', data).then(() => {
            toast.success('Listing Created!')
            router.refresh(); 
            reset
            setSteps(STEPS.CATEGORY); 
            rentModal.onClose(); 
        }).catch(() => {
            toast.error('Something went wrong')
        }).finally(() => {
            setIsLoading(false); 
        }); 
    }

    const actionLabel = useMemo(() => {

        if(step === STEPS.PRICE) {
            return 'Create'; 

        }
        return 'Next'

    }, [step]); 

    const secondaryActionLabel = useMemo(() => {

        if (step === STEPS.CATEGORY) {
            return undefined; 
        }
        return 'Back'; 

    }, [step]); 


    return (
        <Modal 
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
        title="Airbnb your home"
        body={<Body 
        step={step} 
        setCustomValue={setCustomValue} 
        category={category}
        location={location}
        infoBody={{guestCount: guestCount, bathroomCount: bathroomCount, roomCount:roomCount, setCustomValue: setCustomValue}}
        descriptionBody={{isLoading:isLoading, register:register, errors:errors}}
        imageSrc={imageSrc}

        
        
        />}
        
        /> 
    )
}

export default RentModal; 