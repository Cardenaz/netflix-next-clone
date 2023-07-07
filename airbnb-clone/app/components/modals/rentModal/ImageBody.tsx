'use client';
import Heading from "../../Heading";
import ImageUpload from "../../inputs/ImageUpload";

 


const ImageBody = () => {

    return (<div className="flex flex-col gap-8">

        <Heading 

        title="Add a photo of your place"
        subtitle="Show guests what your place looks like!"
        
        />

        <ImageUpload />



    </div>)
}


export default ImageBody; 