import * as z from 'zod';
import { sections } from './PageBuilder/Blocks/Sections';

export const pages = z.object({
  status: z.enum(['draft', 'published', 'archived']),
  date_created: z.string(),
  date_updated: z.string(),
  title: z.string(),
  uri: z.url(),
  description: z.string().optional(),
  sections: z.array(sections),
  get parent(){
    return pages;
  }
})

export type Pages = z.infer<typeof pages>;
