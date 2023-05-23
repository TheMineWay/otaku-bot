import { Global, Module } from '@nestjs/common';
import { I18nService } from './i18n.service';

export const I18N_SERVICE = 'I18N_SERVICE';

@Global()
@Module({
  providers: [
    {
      provide: I18N_SERVICE,
      useFactory: async () => await I18nService.new(),
    },
  ],
  exports: [I18N_SERVICE],
})
export class I18nModule {}
