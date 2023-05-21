import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const fs = require('fs');
const path = require('path');

async function bootstrap() {
  // HTTPS options
  const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, '../certificates/key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../certificates/cert.pem')),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });
  await app.listen(3000);
}
bootstrap();
