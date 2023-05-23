import { Injectable, Logger } from '@nestjs/common';
import { TFunction } from 'i18next';
import * as i18next from 'i18next';

import * as en_US_commands_info from './locales/en_US/commands/info.json';

@Injectable()
export class I18nService {
  private constructor(
    private readonly t: TFunction<'translation', undefined, 'translation'>,
  ) {}

  public static new = async () => {
    try {
      Logger.log(i18next);

      const lng = 'en_US';

      const i18n = await i18next.init({
        lng,
        debug: true,
        resources: {
          // en_US - MAIN DEV LANGUAGE
          en_US: {
            translation: {
              commands: {
                info: en_US_commands_info,
              },
            },
          },
        },
      });
      Logger.log(`${lng} set as the default bot language`, 'i18n');
      return new I18nService(i18n);
    } catch (e) {
      Logger.error('i18n could not be initializated', 'i18n');
      throw e;
    }
  };

  public translate = (key: string, args: Record<string, string | number>) =>
    this.t(key, args);
}
