import { PartialType } from "@nestjs/mapped-types";
import { CreateSapatos } from "./create-sapato";

export class UpdateSapato extends PartialType(CreateSapatos){
    //valida partes do CreateSapatos---significa que cada atualização será apcional

    // readonly name?: string;
    // readonly descricao?: string;
    // readonly tamanho?: string;
    // readonly valor?: number;
    // readonly quantidade?: number;

}