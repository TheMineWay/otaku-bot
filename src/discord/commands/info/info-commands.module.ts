import { Module } from '@nestjs/common';
import { SendNudesCommand } from './send-nudes.command';

@Module({
  providers: [SendNudesCommand],
})
export class InfoCommandsModule {}
