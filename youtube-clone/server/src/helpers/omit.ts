/*function omit<T>(obj: T, property: keyof T | (keyof T)[]) {

    if(Array.isArray(property)) {
        const entries = Object.entries(obj).filter(item => {
            const [] = item; 
        })
    }


 const { [property]: unused, ...rest} = obj; 

    return rest; 

}

export default omit; */