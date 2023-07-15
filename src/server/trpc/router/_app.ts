import { router } from "../trpc";
import { authRouter } from "./auth";
import { todoRouter } from "./todo";
import { userRouter } from "./user";
import { documentRouter } from "./document";
import { projectRouter } from "./project";

export const appRouter = router({
  auth: authRouter,
  user: userRouter,
  todo: todoRouter,

  //Update for new router
  document: documentRouter,
  project: projectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
