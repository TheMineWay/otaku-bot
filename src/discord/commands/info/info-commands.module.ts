import { Module } from '@nestjs/common';
import { SendNudesCommand } from './send-nudes.command';
import { VersionCommand } from './version.command';

@Module({
  providers: [SendNudesCommand, VersionCommand],
})
export class InfoCommandsModule {}
