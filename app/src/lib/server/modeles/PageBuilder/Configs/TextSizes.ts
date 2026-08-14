import * as z from 'zod';

export const textSizes = z.object({
  id: z.enum(['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl']),
})

export type TextSizes = z.infer<typeof textSizes>;
