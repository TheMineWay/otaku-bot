import { Controller, Get } from '@nestjs/common';
import { InteractionsService } from './interactions.service';

@Controller('api/interactions')
export class InteractionsController {
  constructor(private readonly interactionsService: InteractionsService) {}

  @Get()
  async getInteraction() {
    return await this.interactionsService.getInteraction();
  }
}
