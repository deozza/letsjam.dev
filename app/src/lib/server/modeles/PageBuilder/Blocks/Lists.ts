import * as z from 'zod';
import { steps } from './Steps';

export const lists = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  items: z.array(steps),
})

export type Lists = z.infer<typeof lists>;
