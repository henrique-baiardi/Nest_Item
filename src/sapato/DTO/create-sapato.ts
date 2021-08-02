import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateSapatos{

   @IsString()
   readonly nome: string;

   @IsNumber()
   readonly valor: number;

   @IsBoolean()
   readonly disponivel: boolean;
   
   @IsString({each:true})
   readonly tamanhos: string[];

}