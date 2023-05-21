import { Injectable } from '@nestjs/common';
import { Env } from '../../types/env/env.type';

@Injectable()
export class ConfigService {
  private readonly env: EnvModel;

  constructor() {
    const env = process.env as Env;
    this.env = {
      ...env,
      REPOSITORY_URL:
        env.REPOSITORY_URL ?? 'https://github.com/TheMineWay/otaku-bot',
    };
  }

  public getEnv = () => ({ ...this.env } as EnvModel);
}

class EnvModel {
  DISCORD_TOKEN: string;
  REPOSITORY_URL: string;
}
