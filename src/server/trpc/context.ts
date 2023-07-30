import { type inferAsyncReturnType } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { type Session } from "next-auth";

import { getServerAuthSession } from "../common/get-server-auth-session";
import { prisma } from "../db/client";

type CreateContextOptions = {
  session: Session | null;
  // googleProfile?: { email: string; name?: string }; // Add this
};

export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
    // googleProfile: opts.googleProfile, // Add this
  };
};

export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  // Get the session from the server using the unstable_getServerSession wrapper function
  const session = await getServerAuthSession({ req, res });

  // Extract the email and profile data from Google OAuth
  // const googleProfile = session?.user?.email
  //   ? { email: session.user.email, name: session.user.name }
  //   : undefined;

  return await createContextInner({
    session,
    // googleProfile, // Pass the Google profile to the context
  });
};