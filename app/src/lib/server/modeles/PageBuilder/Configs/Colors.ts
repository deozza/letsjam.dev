import * as z from 'zod';

export const colors = z.object({
  id: z.enum(['primary', 'secondary', 'tertiary', 'white', 'black']),
})

export type Colors = z.infer<typeof colors>;
