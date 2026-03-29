import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    servings: z.string(),
    cuisine: z.string().optional(),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']).optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    isMauritian: z.boolean().default(false),
  }),
});

export const collections = {
  recipes: recipesCollection,
};
