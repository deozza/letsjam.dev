import * as z from 'zod';

export const containerWidths = z.object({
  id: z.enum(['full', '1/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12']),
})

export type ContainerWidths = z.infer<typeof containerWidths>;
