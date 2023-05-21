import { Module } from '@nestjs/common';
import { DiscordModule as DiscordModule_DiscordJS } from '@discord-nestjs/core';
import { DiscordConfigService } from './config/discord-config.service';
import { InfoCommandsModule } from './commands/info/info-commands.module';
import { BotGateway } from './bot/bot.gateway';

@Module({
  imports: [
    DiscordModule_DiscordJS.forRootAsync({
      useClass: DiscordConfigService,
    }),
    InfoCommandsModule,
  ],
  providers: [BotGateway],
})
export class DiscordModule {}
