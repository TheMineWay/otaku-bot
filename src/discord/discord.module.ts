import { Module } from '@nestjs/common';
import { DiscordModule as DiscordModule_DiscordJS } from '@discord-nestjs/core';
import { DiscordConfigService } from './config/discord-config.service';

@Module({
  imports: [
    DiscordModule_DiscordJS.forRootAsync({
      useClass: DiscordConfigService,
    }),
  ],
})
export class DiscordModule {}
