import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '../config/config.service';
import { databaseEntities } from '../../database/entities/database-entities';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const env = new ConfigService().getEnv();
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: env.DATABASE_HOST,
        port: env.DATABASE_PORT,
        username: env.DATABASE_USER,
        password: env.DATABASE_PASSWORD,
        database: env.DATABASE_NAME,
        pool: {
          min: 2,
          max: 5,
        },
        sync: {
          alter: true,
          force: false,
        },
        logging: env.ENABLE_DATABASE_LOGGING ? console.log : undefined,
      });
      sequelize.addModels(databaseEntities);
      await sequelize.sync();
      return sequelize;
    },
  },
];
