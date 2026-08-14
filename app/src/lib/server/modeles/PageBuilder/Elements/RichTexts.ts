import * as z from 'zod';

export const richTexts = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  content: z.string(),
})

export type RichTexts = z.infer<typeof richTexts>;
