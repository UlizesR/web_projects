import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        
        // ...add more providers here
    ],
}
export default NextAuth(authOptions)