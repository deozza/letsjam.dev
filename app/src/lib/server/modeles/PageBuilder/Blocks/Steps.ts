import * as z from 'zod';

export const steps = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
})

export type Steps = z.infer<typeof steps>;
