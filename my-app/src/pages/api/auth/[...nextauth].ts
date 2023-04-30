import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import DiscordProvider from "next-auth/providers/discord";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options


export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ? process.env.GITHUB_ID : "",
      clientSecret: process.env.GITHUB_SECRET ? process.env.GITHUB_SECRET : "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ? process.env.GOOGLE_ID : "",
      clientSecret: process.env.GOOGLE_SECRET ? process.env.GOOGLE_SECRET : "",
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_ID ? process.env.DISCORD_ID : "",
      clientSecret: process.env.DISCORD_SECRET ? process.env.DISCORD_SECRET : "",
    })
  ],
  theme: {
    colorScheme: "dark",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
}

export default NextAuth(authOptions)
