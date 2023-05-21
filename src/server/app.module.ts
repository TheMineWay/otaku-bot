import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { DiscordModule } from '../discord/discord.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ApiModule, DiscordModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
