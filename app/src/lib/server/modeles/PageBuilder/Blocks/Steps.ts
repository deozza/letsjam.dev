import * as z from 'zod';
import { paragraphs } from '../Elements/Paragraphs';
import { richTexts } from '../Elements/RichTexts';

export const steps = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  title: paragraphs.optional(),
  content:richTexts.optional(),
  numbered: z.boolean()
})

export type Steps = z.infer<typeof steps>;
