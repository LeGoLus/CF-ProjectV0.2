import { z } from "zod";

import { protectedProcedure, router } from "../trpc";

export const documentRouter = router({
  create: protectedProcedure
    .input(
      z.object({
        namedocument: z.string(),
        description: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      const { namedocument, description } = input;
      const id = ctx.session.user.id;
      return ctx.prisma.document.create({ data: { namedocument, description, userId: id } });
    }),
    getAll: protectedProcedure.query(({ ctx }) => {
        const id = ctx.session.user.id;
        return ctx.prisma.document.findMany({ where: { userId: id } });
      }),
  delete: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
          const { id } = input;
          const document = await ctx.prisma.document.findUnique({ where: { id } });
          if (!document) throw new Error("Task no longer exist!");
          const userId = ctx.session.user.id;
          if (document?.userId !== userId)
            throw new Error("You are not authorized to modify this task!");
          return ctx.prisma.document.delete({ where: { id } });
        }),
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        document: z.object({
          namedocument: z.string().optional(),
          description: z.string().optional(),
        }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, document: newDocument } = input;
      const document = await ctx.prisma.document.findUnique({ where: { id } });
      if (!document) throw new Error("Document Not Found!");
      const userId = ctx.session.user.id;
      if (document?.userId !== userId)
        throw new Error("You are not authorized to modify this document!");
      return ctx.prisma.document.update({ where: { id }, data: newDocument });
    }),
});


