import { Command, Handler } from '@discord-nestjs/core';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '../../../server/config/config.service';
import { I18N_SERVICE } from '../../../i18n/i18n.module';
import { I18nService } from '../../../i18n/i18n.service';

@Command({
  name: 'sendnudes',
  description: 'Send discord nudes',
})
@Injectable()
export class SendNudesCommand {
  constructor(
    private readonly configService: ConfigService,
    @Inject(I18N_SERVICE) private readonly i18nService: I18nService,
  ) {}

  @Handler()
  onCommand(): string {
    return this.i18nService.translate('commands.info.send-nudes.Response', {
      url: this.configService.getEnv().REPOSITORY_URL,
    });
  }
}
