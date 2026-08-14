import * as z from 'zod';
import { pages } from '../../Pages';
import { styles } from '../Configs/Styles';

export const buttons= z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  content: z.string(),
  style: styles,
  linkTo: z.object(pages).optional() 
})

export type Buttons = z.infer<typeof buttons>;
