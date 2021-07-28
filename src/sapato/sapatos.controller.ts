import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateSapatos } from "./DTO/create-sapato";
import { UpdateSapato } from "./DTO/update-sapatos";
import { SapatoService } from "./sapatos.service";

@Controller('sapatos')
export class SapatosController{

    constructor(private readonly sapatoService: SapatoService){}

    @Get('')
    findAll(){
        return this.sapatoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') params){
        return this.sapatoService.findOne(params);
    }

    @Post()
    create( @Body() body:CreateSapatos){
        return this.sapatoService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body:UpdateSapato){
        return this.sapatoService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') params:string){
        return this.sapatoService.remove(params);
    }
}