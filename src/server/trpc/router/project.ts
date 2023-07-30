// import { z } from "zod";

// import { protectedProcedure, router } from "../trpc";

// export const projectRouter = router({
//   create: protectedProcedure
//     .input(
//       z.object({
//         nameproject: z.string(),
//         description: z.string(),
//       })
//     )
//     .mutation(({ ctx, input }) => {
//       const { nameproject, description } = input;
//       const id = ctx.session.user.id;
//       return ctx.prisma.project.create({ data: { nameproject, description, userId: id } });
//     }),
//     getAll: protectedProcedure.query(({ ctx }) => {
//         const id = ctx.session.user.id;
//         return ctx.prisma.project.findMany({ where: { userId: id } });
//       }),
//       delete: protectedProcedure
//         .input(z.object({ id: z.string() }))
//         .mutation(async ({ ctx, input }) => {
//           const { id } = input;
//           const project = await ctx.prisma.project.findUnique({ where: { id } });
//           if (!project) throw new Error("Task no longer exist!");
//           const userId = ctx.session.user.id;
//           if (project?.userId !== userId)
//             throw new Error("You are not authorized to modify this task!");
//           return ctx.prisma.project.delete({ where: { id } });
//         }),
//   update: protectedProcedure
//     .input(
//       z.object({
//         id: z.string(),
//         project: z.object({
//           nameproject: z.string().optional(),
//           description: z.string().optional(),
//         }),
//       })
//     )
//     .mutation(async ({ ctx, input }) => {
//       const { id, project: newProject } = input;
//       const project = await ctx.prisma.project.findUnique({ where: { id } });
//       if (!project) throw new Error("Project Not Found!");
//       const userId = ctx.session.user.id;
//       if (project?.userId !== userId)
//         throw new Error("You are not authorized to modify this project!");
//       return ctx.prisma.project.update({ where: { id }, data: newProject });
//     }),
//     getBySlug: protectedProcedure
//     .input(
//       z.object({
//         id: z.string(), // Change this to `slug` if the parameter name is `slug` instead of `id`
//       })
//     )
//     .query(async ({ ctx, input }) => {
//       const { id } = input;
//       --// const { data: project, error } = await ctx.prisma.project.getBySlug.useQuery({ slug: id });
//       const project = await ctx.prisma.project.findUnique({ where: { id } })
//       --// if (error) throw new Error("Error fetching project details");
//       --// return project;
//       if (!project) throw new Error("Project Not Found!");
//       return project;
//     }),
// });

// import { z } from "zod";
// import { protectedProcedure, router } from "../trpc";

// export const projectRouter = router({
//   create: protectedProcedure
//     .input(
//       z.object({
//         nameproject: z.string(),
//         description: z.string(),
//       })
//     )
//     .mutation(({ ctx, input }) => {
//       const { nameproject, description } = input;
//       const id = ctx.session.user.id;
//       return ctx.prisma.project.create({ data: { nameproject, description, userId: id } });
//     }),

//   getAll: protectedProcedure.query(({ ctx }) => {
//     const id = ctx.session.user.id;
//     return ctx.prisma.project.findMany({ where: { userId: id } });
//   }),

//   delete: protectedProcedure
//     .input(z.object({ id: z.string() }))
//     .mutation(async ({ ctx, input }) => {
//       const { id } = input;
//       const project = await ctx.prisma.project.findUnique({ where: { id } });
//       if (!project) throw new Error("Project no longer exists!");
//       const userId = ctx.session.user.id;
//       if (project?.userId !== userId)
//         throw new Error("You are not authorized to modify this project!");
//       return ctx.prisma.project.delete({ where: { id } });
//     }),

//   update: protectedProcedure
//     .input(
//       z.object({
//         id: z.string(),
//         project: z.object({
//           nameproject: z.string().optional(),
//           description: z.string().optional(),
//         }),
//       })
//     )
//     .mutation(async ({ ctx, input }) => {
//       const { id, project: newProject } = input;
//       const project = await ctx.prisma.project.findUnique({ where: { id } });
//       if (!project) throw new Error("Project Not Found!");
//       const userId = ctx.session.user.id;
//       if (project?.userId !== userId)
//         throw new Error("You are not authorized to modify this project!");
//       return ctx.prisma.project.update({ where: { id }, data: newProject });
//     }),

//   getBySlug: protectedProcedure
//     .input(
//       z.object({
//         projectId: z.string(),
//       })
//     )
//     .query(async ({ ctx, input }) => {
//       const { project.id } = input;
//       const project = await ctx.prisma.project.findUnique({ where: { nameproject: id } });
//       if (!project) throw new Error("Project Not Found!");
//       return project;
//     }),
// });

import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const projectRouter = router({
  create: protectedProcedure
    .input(
      z.object({
        nameproject: z.string(),
        description: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      const { nameproject, description } = input;
      const id = ctx.session.user.id;
      return ctx.prisma.project.create({
        data: { nameproject, description, userId: id },
      });
    }),
  getAll: protectedProcedure.query(({ ctx }) => {
    const id = ctx.session.user.id;
    return ctx.prisma.project.findMany({ where: { userId: id } });
  }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      const project = await ctx.prisma.project.findUnique({ where: { id } });
      if (!project) throw new Error("Project no longer exists!");
      const userId = ctx.session.user.id;
      if (project?.userId !== userId)
        throw new Error("You are not authorized to modify this project!");
      return ctx.prisma.project.delete({ where: { id } });
    }),
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        project: z.object({
          nameproject: z.string().optional(),
          description: z.string().optional(),
        }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, project: newProject } = input;
      const project = await ctx.prisma.project.findUnique({ where: { id } });
      if (!project) throw new Error("Project Not Found!");
      const userId = ctx.session.user.id;
      if (project?.userId !== userId)
        throw new Error("You are not authorized to modify this project!");
      return ctx.prisma.project.update({ where: { id }, data: newProject });
    }),
  getBySlug: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { id } = input;
      const project = await ctx.prisma.project.findUnique({ where: { id } });
      if (!project) throw new Error("Project Not Found!");
      return project;
    }),
});


