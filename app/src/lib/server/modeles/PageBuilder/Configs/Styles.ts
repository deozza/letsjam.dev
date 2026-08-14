import * as z from 'zod';

export const styles = z.object({
  id: z.enum(['primary', 'secondary', 'tertiary', 'white', 'black']),
})

export type Styles = z.infer<typeof styles>;
