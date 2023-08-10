 
 
import NextAuth, {  AuthOptions, getServerSession } from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
/* import CredentialsProvider from "next-auth/providers/credentials"; */
/* import { PrismaAdapter } from '@next-auth/prisma-adapter'; */

 
/* import prisma from '@/libs/prismadb'; */
 

 const handler= NextAuth({
  
  providers: [
    GoogleProvider({
     clientId: process.env.GOOGLE_CLIENT_ID as string,
     clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    
  ],
  debug: process.env.NODE_ENV === 'development',
   
});

export {handler as GET, handler as POST}