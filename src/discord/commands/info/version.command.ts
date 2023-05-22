import { Command, Handler } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { getPackageJson } from '../../../utils/package/get-package-json.util';

@Command({
  name: 'version',
  description: 'Get bot version',
})
@Injectable()
export class VersionCommand {
  @Handler()
  onCommand(): string {
    return `My current version is ${getPackageJson().version}`;
  }
}
