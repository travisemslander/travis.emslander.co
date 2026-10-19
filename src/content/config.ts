import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    topic: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };
