import * as z from 'zod';
import { createDirectus, rest } from '@directus/sdk';
import { pages } from '$lib/server/modeles/Pages';
import { sections } from '$lib/server/modeles/PageBuilder/Blocks/Sections';
import { callToActions } from '$lib/server/modeles/PageBuilder/Blocks/CallToActions';
import { steps } from '$lib/server/modeles/PageBuilder/Blocks/Steps';
import { headers } from '$lib/server/modeles/PageBuilder/Elements/Headers';
import { paragraphs } from '$lib/server/modeles/PageBuilder/Elements/Paragraphs';
import { buttons } from '$lib/server/modeles/PageBuilder/Elements/Buttons';
import { richTexts } from '$lib/server/modeles/PageBuilder/Elements/RichTexts';
import { cards } from '$lib/server/modeles/PageBuilder/Blocks/Cards';
import { grids } from '$lib/server/modeles/PageBuilder/Blocks/Grids';
import { alignements } from '$lib/server/modeles/PageBuilder/Configs/Alignements';
import { fontWeights } from '$lib/server/modeles/PageBuilder/Configs/FontWeights';
import { styles } from '$lib/server/modeles/PageBuilder/Configs/Styles';
import { textImportances } from '$lib/server/modeles/PageBuilder/Configs/TextImportances';
import { textSizes } from '$lib/server/modeles/PageBuilder/Configs/TextSizes';
import { containerWidths } from '../modeles/PageBuilder/Configs/ContainerWidths';
import { accordions } from '../modeles/PageBuilder/Blocks/Accordions';
import { lists } from '../modeles/PageBuilder/Blocks/Lists';

export const schema = z.object({
  pages: z.array(pages),
  sections: z.array(sections),
  callToActions: z.array(callToActions),
  steps: z.array(steps),
  headers: z.array(headers),
  paragraphs: z.array(paragraphs),
  buttons: z.array(buttons),
  richTexts: z.array(richTexts),
  cards: z.array(cards),
  grids: z.array(grids),
  alignements: z.array(alignements),
  containerWidths: z.array(containerWidths),
  fontWeights: z.array(fontWeights),
  styles: z.array(styles),
  textImportances: z.array(textImportances),
  textSizes: z.array(textSizes),
  accordions: z.array(accordions),
  lists: z.array(lists)
});

export type Schema = z.infer<typeof schema>;

function getDirectusInstance(fetch, url: string) {
	const options = fetch ? { globals: { fetch } } : {};

	const directus = createDirectus<Schema>(url, options).with(rest());
	return directus;
}

export default getDirectusInstance;
