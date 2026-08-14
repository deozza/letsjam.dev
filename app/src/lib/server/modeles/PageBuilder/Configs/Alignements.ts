import * as z from 'zod';

export const alignements = z.object({
  id: z.enum(['left', 'center', 'right', 'justify']),
})

export type Alignements = z.infer<typeof alignements>;
