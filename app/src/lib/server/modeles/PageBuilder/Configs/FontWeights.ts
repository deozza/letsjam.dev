import * as z from 'zod';

export const fontWeights = z.object({
  id: z.enum(['normal', 'bold']),
})

export type FontWeights = z.infer<typeof fontWeights>;
