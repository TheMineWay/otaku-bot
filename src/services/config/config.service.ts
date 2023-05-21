import { Injectable } from '@nestjs/common';
import { Env } from '../../types/env/env.type';

@Injectable()
export class ConfigService {
  private readonly env: EnvModel;

  constructor() {
    const env = process.env as Env;
    this.env = env;
  }

  public getEnv = () => ({ ...this.env } as EnvModel);
}

class EnvModel {
  DISCORD_TOKEN: string;
  APP_ID: string;
  PUBLIC_KEY: string;
}
