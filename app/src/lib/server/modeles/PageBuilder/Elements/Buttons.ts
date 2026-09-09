import * as z from 'zod';
import { pages } from '$lib/server/modeles/Pages';
import { colors } from '$lib/server/modeles/PageBuilder/Configs/Colors';

export const buttons= z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  content: z.string(),
  color: colors,
  internalLinkTo: z.object(pages).optional(),
  externalLinkTo: z.url().optional() 
})

export type Buttons = z.infer<typeof buttons>;
