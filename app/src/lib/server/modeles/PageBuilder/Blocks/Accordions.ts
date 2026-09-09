import * as z from 'zod';
import { steps } from '$lib/server/modeles/PageBuilder/Blocks/Steps';

export const accordions = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  items: z.array(steps),
})

export type Accordions = z.infer<typeof accordions>;
