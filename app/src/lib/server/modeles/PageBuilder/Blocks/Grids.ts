import * as z from 'zod';
import { buttons } from '../Elements/Buttons';
import { cards } from './Cards';
import { alignements } from '../Configs/Alignements';

export const grids = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  columns: z.number().min(1).optional(),
  rows: z.number().min(1).optional(),
  elements: z.array(z.union([buttons, cards])),
  alignement: alignements
})

export type Grids = z.infer<typeof grids>;
