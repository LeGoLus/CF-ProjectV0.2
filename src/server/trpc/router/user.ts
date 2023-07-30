import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const userRouter = router({
  register: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.create({ data: input });
    }),

  //New features delete user  
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.delete({ where: { id: input.id } });
    }
    ),
  //New features update user
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        user: z.object({
          email: z.string().optional(),
          password: z.string().optional(),
        }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, user: newUser } = input;
      const user = await ctx.prisma.user.findUnique({ where: { id } });
      if (!user) throw new Error("User Not Found!");
      return ctx.prisma.user.update({ where: { id }, data: newUser });
    }
    ),
  //New features get all user
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }
  ),
});
