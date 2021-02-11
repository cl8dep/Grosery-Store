import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: process.env.DATABASE_HOST || 'localhost',
        port: parseInt(process.env.DATABASE_PORT) || 3306,
        username: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASSWORD || 'FrodoDobi001221*',
        database: process.env.DATABASE_NAME || 'grocery-app',
        entities: [__dirname + '/entities/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
