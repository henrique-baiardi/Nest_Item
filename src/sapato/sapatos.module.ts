import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SapatosController } from "./sapatos.controller";
import { Sapato } from "./sapatos.entity";
import { SapatoService } from "./sapatos.service";
import { Tamanhos } from "./tamanhos.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Sapato,Tamanhos])],
    controllers: [SapatosController],
    providers:[SapatoService],
})
export class SapatosModule{} 