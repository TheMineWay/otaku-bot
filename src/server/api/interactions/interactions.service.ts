import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../../services/config/config.service';

@Injectable()
export class InteractionsService {
  constructor(private readonly configService: ConfigService) {}

  async getInteraction() {
    return 'NONE';
  }
}
