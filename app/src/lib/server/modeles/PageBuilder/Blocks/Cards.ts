import * as z from 'zod';
import { paragraphs } from '$lib/server/modeles/PageBuilder/Elements/Paragraphs';
import { grids } from '$lib/server/modeles/PageBuilder/Blocks/Grids';
import { containerWidths } from '$lib/server/modeles/PageBuilder/Configs/ContainerWidths';
import { richTexts } from '$lib/server/modeles/PageBuilder/Elements/RichTexts';
import { colors } from '$lib/server/modeles/PageBuilder/Configs/Colors';
import { alignments } from '$lib/server/modeles/PageBuilder/Configs/Alignments';

export const cards = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  color: colors,
  alignment: alignments,
  width: containerWidths, 
  title: paragraphs.optional(),
  content: richTexts.optional(),
  footer: grids.optional()
})

export type Cards = z.infer<typeof cards>;
