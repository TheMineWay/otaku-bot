import { Command, Handler } from '@discord-nestjs/core';
import { Inject, Injectable } from '@nestjs/common';
import { getPackageJson } from '../../../utils/package/get-package-json.util';
import { I18nService } from '../../../i18n/i18n.service';

@Command({
  name: 'version',
  description: 'Get bot version',
})
@Injectable()
export class VersionCommand {
  constructor(@Inject('I18N_SERVICE') private i18nService: I18nService) {}

  @Handler()
  onCommand(): string {
    return this.i18nService.translate('commands.info.version.Response', {
      version: getPackageJson().version,
    });
  }
}
