import { createConnection, getConnectionOptions } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      let connectionOptions;
      if (process.env.NODE_ENV === "production")
        connectionOptions =  await getConnectionOptions("heroku-postgres");
      else
        connectionOptions =  await getConnectionOptions();
      return await createConnection({
        ...connectionOptions,
        entities: [__dirname + '/entities/**/*.entity{.ts,.js}']
      });
    }
  },
];
