import * as z from 'zod';

export const textImportances = z.object({
  id: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
})

export type TextImportances = z.infer<typeof textImportances>;
