import { z } from 'zod';

export const userRegistrationSchema = z.object({
  user: z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
  }),
});

export type UserRegistrationBody = z.infer<typeof userRegistrationSchema>;