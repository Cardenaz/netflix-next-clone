export class User {
    id: string; 
    email: string; 
    name: string; 
    favoriteIds: string[]

    constructor(id:string,email:string, name:string, favoriteIds: string[]){
        this.id = id; 
        this.email = email; 
        this.name = name; 
        this.favoriteIds = favoriteIds; 
    }

}