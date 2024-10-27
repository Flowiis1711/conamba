import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    shortName: z.string(),
    title: z.string(),
    location: z.string(),
    startYear: z.number(),
    endYear: z.number(),
    sponsor: z.string(),
    mainImage: z.object({
      url: z.string(),
      description: z.string().optional(),
    }),
    images: z.array(
      z.object({
        url: z.string(),
        description: z.string().optional(),
      })
    ),
  }),
});

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    content: z.array(z.string()),
    icon: z.string(),
    column: z.string(),
  }),
});

export const collections = { projects, services };
