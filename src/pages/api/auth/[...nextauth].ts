import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  // callbacks: {
  //   jwt({ token, user }) {
  //     if (user) {
  //       token.id = user?.id;
  //     }
  //     return token;
  //   },
  //   session({ session, token, user }) {
  //     if (user) {
  //       session.user.id = token.id as string;
  //       session.user.role = user.role;
  //     }
  //     return session;
  //   },
  // },
  // },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user?.id;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (user) {
        session.user = {
          ...session.user,
          id: token.id as string,
        };
    
        // Fetch the user's role from the database
        const userWithRole = await prisma.user.findUnique({
          where: { id: user.id },
          select: { role: true },
        });
    
        // Set the default role value if userWithRole or role property is not present
        const defaultRole = 'DEFAULT_ROLE'; // Replace 'DEFAULT_ROLE' with your actual default role value
    
        if (userWithRole?.role) {
          session.user.role = userWithRole.role;
        } else {
          session.user.role = defaultRole; 
        }
      }
    
      console.log(session);
      return session;
    }
    
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  // debug: true,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });
        if (!user) {
          throw new Error("user does not exist with this email!");
        }
        if (user.password !== credentials?.password) {
          throw new Error("Password does not match");
        }
        return user;
      },
    }),
  ],
};

export default NextAuth(authOptions);
