'use client'
import { categories } from "@/app/shared/domain/categories";
import Heading from "../../Heading";
import CategoryInput from "../../inputs/CategoryInput";

 
interface CategoryProps {
    setCustomValue: (id: string, value: any) => void, 
    category: any, 
}


const CategoryBody: React.FC<CategoryProps> = ({
    setCustomValue, 
    category
}) => {

  return(  <div className="flex flex-col gap-8">
    <Heading  title="Which of these best describes your place?"
            subtitle="Pick a category"
    />            
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
     
        {categories.map((item) => {
            return <div key={item.label} className="col-span-1"> 
    
            <CategoryInput 
            onClick={(category)=> setCustomValue('category', category)}
            selected={category === item.label}
            label={item.label}
            icon={item.icon}
            
            />
            
           
                 </div>
        })}
        
        
         </div>
                 </div> )

}

export default CategoryBody; 