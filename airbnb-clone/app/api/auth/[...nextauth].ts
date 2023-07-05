import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'; 
import GoogleProvider from 'next-auth/providers/google'; 

import prisma from "../../libs/prismadb"; 
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from 'bcrypt'; 

import NextAuth from "next-auth/next";

 export const authOptions: AuthOptions = {

    adapter: PrismaAdapter(prisma), 
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string, 
            clientSecret: process.env.GITHUB_SECRET as string
        }), 
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }), 

        CredentialsProvider({
            name: 'credentials', 
            credentials: {
                email: {label: 'email', type: 'text'}, 
                password: {label: 'password', type: 'password'}, 

            }, 
            async authorize(credentials) {
                console.log("Running the authorize function")
                if(!credentials?.email || !credentials?.password) {
                    console.log("failing at the first entry")
                    throw new Error('Invalid credentials'); 
                }

                const user = await prisma.user.findUnique({
                    where: {email: credentials.email}
                }); 

                if(!user || !user?.hashedPassword) {
                    console.log("failing at the second level")
                    throw new Error("Invalid credentials"); 
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password, 
                    user.hashedPassword
                )

                if(!isCorrectPassword) {
                    console.log("failing at the hashing level")

                    throw new Error('invalid credentials'); 
                }

                return user; 
                
            }
        })
    ], 
    pages: {
        signIn: '/', 

    }, 

    debug: process.env.NODE_ENV === 'development', 
    session: {
        strategy: 'jwt'
    }, 
    secret: process.env.NEXTAUTH_SECRET

 }

 export default NextAuth(authOptions); 