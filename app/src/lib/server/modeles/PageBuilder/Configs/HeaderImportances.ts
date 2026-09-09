import * as z from 'zod';

export const headerImportances = z.object({
  id: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
})

export type HeaderImportances = z.infer<typeof headerImportances>;
