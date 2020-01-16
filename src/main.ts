import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();// 启用跨源资源共享（CORS）
  await app.listen(3000);
}
bootstrap();