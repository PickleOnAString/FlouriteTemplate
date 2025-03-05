import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

export const Database = drizzle(process.env.DATABASE_URL!);
