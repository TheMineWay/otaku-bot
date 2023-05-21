import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { ConfigService } from '../services/config/config.service';

@Module({
  imports: [ApiModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
