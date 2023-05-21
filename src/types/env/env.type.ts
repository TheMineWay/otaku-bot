export type Env = {
  DISCORD_TOKEN: string;

  DATABASE_NAME: string;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE_HOST: string;
  DATABASE_PORT?: string;

  REPOSITORY_URL?: string;
};
