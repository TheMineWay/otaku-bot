import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { InteractionsModule } from './interactions/interactions.module';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [InteractionsModule],
})
export class ApiModule {}
