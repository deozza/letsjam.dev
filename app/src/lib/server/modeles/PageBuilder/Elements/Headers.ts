import * as z from 'zod';
import { textSizes } from '../Configs/TextSizes';
import { textImportances } from '../Configs/TextImportances';
import { alignements } from '../Configs/Alignements';
import { styles } from '../Configs/Styles';

export const headers = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  content: z.string(),
  size: textSizes,
  importance: textImportances,
  alignement: alignements,
  style: styles
})

export type Headers = z.infer<typeof headers>;
