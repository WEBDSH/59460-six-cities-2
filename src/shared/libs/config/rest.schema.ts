import { z } from 'zod';

export const configRestSchema = z.object({
  PORT: z.coerce.number().default(4000),
  SALT: z.string(),
  DB_HOST: z.ipv4().default('127.0.0.1'),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_PORT: z.string().default('27017'),
  DB_NAME: z.string(),
});

export type RestSchema = z.infer<typeof configRestSchema>;
