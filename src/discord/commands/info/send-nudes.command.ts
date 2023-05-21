import { Command, Handler } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../../server/config/config.service';

@Command({
  name: 'sendnudes',
  description: 'Send discord nudes',
})
@Injectable()
export class SendNudesCommand {
  constructor(private readonly configService: ConfigService) {}

  @Handler()
  onPlaylist(): string {
    return `You can see here my insides here ${
      this.configService.getEnv().REPOSITORY_URL
    } UwU`;
  }
}
