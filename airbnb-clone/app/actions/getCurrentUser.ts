import { getServerSession } from "next-auth";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from '@/app/libs/prismadb'; 
import { User } from "../domain/entities/user";

export async function getSession() {
    return getServerSession(authOptions)
}

export default async function getCurrentUser(): Promise<User | null | undefined>  {
    try {
        const session = await getSession(); 

        if(!session?.user?.email) {
            return null; 
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        }); 

        if(currentUser) {return new User(currentUser.id, currentUser.email!, currentUser.name!)}
        
        else {
            return null; 
        }

        
    } catch (error) {
        return null; 
    }
}