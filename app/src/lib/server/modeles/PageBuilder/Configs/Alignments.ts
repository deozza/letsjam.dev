import * as z from 'zod';

export const alignments = z.object({
  id: z.enum(['left', 'center', 'right', 'justify']),
})

export type Alignments = z.infer<typeof alignments>;
