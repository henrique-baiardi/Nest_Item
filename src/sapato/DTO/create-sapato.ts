import { IsNumber, IsString } from "class-validator";

export class CreateSapatos{

   @IsString()
   readonly nome: string;
   @IsString()
   readonly descricao: string;
   @IsString()
   readonly tamanho: string;
   @IsNumber()
   readonly valor: number;
   @IsNumber()
   readonly quantidade: number;

}