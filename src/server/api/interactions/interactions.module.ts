import { Module } from '@nestjs/common';
import { InteractionsController } from './interactions.controller';
import { InteractionsService } from './interactions.service';
import { ConfigService } from '../../../services/config/config.service';

@Module({
  controllers: [InteractionsController],
  providers: [InteractionsService, ConfigService],
})
export class InteractionsModule {}
