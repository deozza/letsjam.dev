import * as z from 'zod';
import { textSizes } from '$lib/server/modeles/PageBuilder/Configs/TextSizes';
import { fontWeights } from '$lib/server/modeles/PageBuilder/Configs/FontWeights';
import { containerWidths } from '$lib/server/modeles/PageBuilder/Configs/ContainerWidths';
import { colors } from '$lib/server/modeles/PageBuilder/Configs/Colors';
import { alignments } from '$lib/server/modeles/PageBuilder/Configs/Alignments';

export const paragraphs = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  content: z.string(),
  alignment: alignments,
  size: textSizes,
  fontWeight: fontWeights,
  color: colors,
  width: containerWidths
})

export type Paragraphs = z.infer<typeof paragraphs>;
