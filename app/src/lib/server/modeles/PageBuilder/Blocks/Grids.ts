import * as z from 'zod';
import { buttons } from '$lib/server/modeles/PageBuilder/Elements/Buttons';
import { cards } from '$lib/server/modeles/PageBuilder/Blocks/Cards';
import { alignments } from '$lib/server/modeles/PageBuilder/Configs/Alignments';

export const grids = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  columns: z.number().min(1).optional(),
  rows: z.number().min(1).optional(),
  elements: z.array(z.union([buttons, cards])),
  alignment: alignments
})

export type Grids = z.infer<typeof grids>;
