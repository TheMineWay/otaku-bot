import { Injectable } from '@nestjs/common';
import { Env } from '../../types/env/env.type';

const DEFAULT_REPOSITORY_URL = 'https://github.com/TheMineWay/otaku-bot';
const DEFAULT_DATABASE_PORT = 3306;

@Injectable()
export class ConfigService {
  private readonly env: EnvModel;

  constructor() {
    const env = process.env as Env;
    this.env = {
      ...env,
      REPOSITORY_URL: env.REPOSITORY_URL ?? DEFAULT_REPOSITORY_URL,
      DATABASE_PORT: env.DATABASE_PORT
        ? +env.DATABASE_PORT
        : DEFAULT_DATABASE_PORT,
    };
  }

  public getEnv = () => ({ ...this.env } as EnvModel);
}

class EnvModel {
  DISCORD_TOKEN: string;

  DATABASE_NAME: string;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE_HOST: string;
  DATABASE_PORT: number;

  REPOSITORY_URL: string;
}
