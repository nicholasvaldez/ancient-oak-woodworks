import { defineCollection, z } from 'astro:content';

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
    date: z.date(),
  }),
});

export const collections = {
  portfolio: portfolioCollection,
};