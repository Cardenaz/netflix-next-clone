import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";


interface IParams {
    listingId?: string
}

async function _getCurrentListingsFromUser({params}: {params:IParams}) : Promise<string[] |  Response> {
    const currentUser = await getCurrentUser(); 

    if(!currentUser) {
        return NextResponse.error(); 
    }

    const {listingId} = params; 

    if(!listingId || typeof listingId != 'string') {
        throw new Error(""); 
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])]; 

    return favoriteIds; 

}

export async function POST(request: Request, {params}: {params:IParams}) {
    const currentUser = await getCurrentUser(); 

    if(!currentUser) {
        return NextResponse.error(); 
    }
    const {listingId} = params; 

    if(!listingId || typeof listingId != 'string') {
        throw new Error(""); 
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])]; 

    favoriteIds.push(listingId); 

    const user = await prisma?.user.update({
        where: {
            id: currentUser.id
        }, 
        data: {
            favoriteIds: favoriteIds
        }
    }); 

    return NextResponse.json(user); 
}


export async function DELETE(request: Request,  {params}: {params:IParams}) {

    const currentUser = await getCurrentUser(); 

    if(!currentUser) {
        return NextResponse.error(); 
    }

    const {listingId} = params; 

    if(!listingId || typeof listingId != 'string') {
        throw new Error(""); 
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])]; 

    favoriteIds = favoriteIds.filter((id) => id !== listingId); 

    const user = await prisma?.user.update({
        where: {
            id: currentUser.id
        }, 
        data: {
            favoriteIds: favoriteIds
        }
    }); 

    return NextResponse.json(user); 
}