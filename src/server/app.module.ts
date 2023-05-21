import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { ConfigService } from '../services/config/config.service';
import { DiscordModule } from '../discord/discord.module';

@Module({
  imports: [ApiModule, DiscordModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
