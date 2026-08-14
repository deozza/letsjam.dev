import * as z from 'zod';
import { paragraphs } from '../Elements/Paragraphs';
import { grids } from './Grids';
import { styles } from '../Configs/Styles';
import { containerWidths } from '../Configs/ContainerWidths';
import { alignements } from '../Configs/Alignements';

export const cards = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  style: styles,
  alignement: alignements,
  width: containerWidths, 
  title: paragraphs.optional(),
  content: paragraphs.optional(),
  footer: grids.optional()
})

export type Cards = z.infer<typeof cards>;
