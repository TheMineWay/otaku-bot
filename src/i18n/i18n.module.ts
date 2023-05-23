import { Global, Module } from '@nestjs/common';
import { I18nService } from './i18n.service';

@Global()
@Module({
  providers: [
    {
      provide: 'I18N_SERVICE',
      useFactory: async () => await I18nService.new(),
    },
  ],
  exports: [
    {
      provide: 'I18N_SERVICE',
      useFactory: async () => await I18nService.new(),
    },
  ],
})
export class I18nModule {}
