export type EnvBoolean = 'no' | 'yes' | 'true' | 'false';

export type Env = {
  HTTPS: EnvBoolean;

  DISCORD_TOKEN: string;

  DATABASE_NAME: string;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE_HOST: string;
  DATABASE_PORT?: string;
  ENABLE_DATABASE_LOGGING?: EnvBoolean;

  ENABLE_SWAGGER?: EnvBoolean;

  REPOSITORY_URL?: string;
};
