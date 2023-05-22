import { Injectable } from '@nestjs/common';
import { Env, EnvBoolean } from '../../types/env/env.type';

const DEFAULT_REPOSITORY_URL = 'https://github.com/TheMineWay/otaku-bot';
const DEFAULT_DATABASE_PORT = 3306;

const evaluateEnvBoolean = (
  envBoolean: EnvBoolean | undefined,
  def: boolean,
) => {
  if (!envBoolean) return def;
  const lower = envBoolean.toLowerCase() as EnvBoolean;
  return lower === 'true' || lower === 'yes';
};

@Injectable()
export class ConfigService {
  private readonly env: EnvModel;

  constructor() {
    const env = process.env as Env;
    this.env = {
      ...env,
      HTTPS: evaluateEnvBoolean(env.HTTPS, false),
      REPOSITORY_URL: env.REPOSITORY_URL ?? DEFAULT_REPOSITORY_URL,
      DATABASE_PORT: env.DATABASE_PORT
        ? +env.DATABASE_PORT
        : DEFAULT_DATABASE_PORT,
      ENABLE_DATABASE_LOGGING: evaluateEnvBoolean(
        env.ENABLE_DATABASE_LOGGING,
        false,
      ),
      ENABLE_SWAGGER: evaluateEnvBoolean(env.ENABLE_SWAGGER, false),
    };
  }

  public getEnv = () => ({ ...this.env } as EnvModel);
}

class EnvModel {
  HTTPS: boolean;

  DISCORD_TOKEN: string;

  DATABASE_NAME: string;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE_HOST: string;
  DATABASE_PORT: number;
  ENABLE_DATABASE_LOGGING: boolean;

  ENABLE_SWAGGER: boolean;

  REPOSITORY_URL: string;
}
