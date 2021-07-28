import { Module } from "@nestjs/common";
import { SapatosController } from "./sapatos.controller";
import { SapatoService } from "./sapatos.service";

@Module({
    controllers: [SapatosController],
    providers:[SapatoService],
})
export class SapatosModule{} 