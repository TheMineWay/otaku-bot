import { NestFactory } from '@nestjs/core';
import { AppModule } from './server/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from './server/config/config.service';

const fs = require('fs');
const path = require('path');

async function bootstrap() {
  const env = new ConfigService().getEnv();

  // HTTPS options
  const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, '../certificates/key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../certificates/cert.pem')),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });

  if (env.ENABLE_SWAGGER) {
    const config = new DocumentBuilder()
      .setTitle('🤖 Otaku BOT')
      .setDescription('The Otaku BOT API description')
      .setVersion('1.0')
      .addTag('Otaku BOT')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }

  await app.listen(3000);
}
bootstrap();
