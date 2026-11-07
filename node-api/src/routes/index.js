import userRoutes from './users';
import meRoutes from './me';
import authRoutes from './auth';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export { userRoutes, meRoutes, authRoutes };
