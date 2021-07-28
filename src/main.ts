import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            //filtra a lista: tudo oq nao deveria ser enviado, nao eh enviado
      forbidNonWhitelisted: true, //retorna o como erro, os datos que nao invalidos na requisicao
      transform:true,             //tipa as informações do obj(DTO) passado: any => Sapato
    }),
  );
  await app.listen(3000);
}
bootstrap();
