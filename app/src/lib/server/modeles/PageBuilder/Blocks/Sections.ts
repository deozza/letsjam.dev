import * as z from 'zod';
import { headers } from '$lib/server/modeles/PageBuilder/Elements/Headers';
import { paragraphs } from '$lib/server/modeles/PageBuilder/Elements/Paragraphs';
import { buttons } from '$lib/server/modeles/PageBuilder/Elements/Buttons';
import { richTexts } from '$lib/server/modeles/PageBuilder/Elements/RichTexts';
import { cards } from '$lib/server/modeles/PageBuilder/Blocks/Cards';
import { grids } from '$lib/server/modeles/PageBuilder/Blocks/Grids';
import { lists } from '$lib/server/modeles/PageBuilder/Blocks/Lists';
import { accordions } from '$lib/server/modeles/PageBuilder/Blocks/Accordions';

export const sections = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  elements: z.array(z.union([headers, paragraphs, buttons, richTexts, cards, grids, lists, accordions]))
})

export type Sections = z.infer<typeof sections>;
