import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    order: z.number(),
    featured: z.boolean().optional(),
  }),
});

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    image: z.string().optional(),
    bio: z.string(),
    email: z.string().email().optional(),
    linkedin: z.string().url().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  'services': servicesCollection,
  'team': teamCollection,
};