import * as z from 'zod';
import { textSizes } from '../Configs/TextSizes';
import { textImportances } from '../Configs/TextImportances';
import { alignements } from '../Configs/Alignements';

export const headers = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  content: z.string(),
  size: textSizes,
  importance: textImportances,
  alignement: alignements
})

export type Headers = z.infer<typeof headers>;
