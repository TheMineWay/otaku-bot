import { Injectable } from '@nestjs/common';
import {
  DiscordModuleOption,
  DiscordOptionsFactory,
} from '@discord-nestjs/core';
import { ConfigService } from '../../server/config/config.service';
import { GatewayIntentBits } from 'discord.js';

@Injectable()
export class DiscordConfigService implements DiscordOptionsFactory {
  createDiscordOptions(): DiscordModuleOption | Promise<DiscordModuleOption> {
    return {
      token: new ConfigService().getEnv().DISCORD_TOKEN,
      discordClientOptions: {
        intents: [GatewayIntentBits.Guilds],
      },
    };
  }
}
