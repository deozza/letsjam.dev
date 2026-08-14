import * as z from 'zod';

export const callToActions = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
})

export type CallToActions = z.infer<typeof callToActions>;
