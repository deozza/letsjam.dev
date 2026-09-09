import * as z from 'zod';
import { textSizes } from '$lib/server/modeles/PageBuilder/Configs/TextSizes';
import { colors } from '$lib/server/modeles/PageBuilder/Configs/Colors';
import { alignments } from '$lib/server/modeles/PageBuilder/Configs/Alignments';
import { headerImportances } from '$lib/server/modeles/PageBuilder/Configs/HeaderImportances';

export const headers = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  content: z.string(),
  size: textSizes,
  importance: headerImportances,
  alignment: alignments,
  color: colors
})

export type Headers = z.infer<typeof headers>;
