import * as z from 'zod';
import { headers } from '../Elements/Headers';
import { paragraphs } from '../Elements/Paragraphs';
import { buttons } from '../Elements/Buttons';
import { richTexts } from '../Elements/RichTexts';
import { cards } from './Cards';
import { grids } from './Grids';

export const sections = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  elements: z.array(z.union([headers, paragraphs, buttons, richTexts, cards, grids]))
})

export type Sections = z.infer<typeof sections>;
