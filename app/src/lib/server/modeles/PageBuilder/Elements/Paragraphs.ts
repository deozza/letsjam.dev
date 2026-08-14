import * as z from 'zod';
import { alignements } from '../Configs/Alignements';
import { textSizes } from '../Configs/TextSizes';
import { fontWeights } from '../Configs/FontWeights';

export const paragraphs = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  content: z.string(),
  alignement: alignements,
  size: textSizes,
  fontWeight: fontWeights
})

export type Paragraphs = z.infer<typeof paragraphs>;
