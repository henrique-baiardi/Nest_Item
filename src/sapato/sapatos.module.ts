import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SapatosController } from "./sapatos.controller";
import { Sapato } from "./sapatos.entity";
import { SapatoService } from "./sapatos.service";

@Module({
    imports: [TypeOrmModule.forFeature([Sapato])],
    controllers: [SapatosController],
    providers:[SapatoService],
})
export class SapatosModule{} 