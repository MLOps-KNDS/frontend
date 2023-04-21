import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import OsuProvider from "next-auth/providers/osu"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        OsuProvider({
            clientId: process.env.OSU_ID,
            clientSecret: process.env.OSU_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ]
})
