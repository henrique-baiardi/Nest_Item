import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSapatos } from "./DTO/create-sapato";
import { UpdateSapato } from "./DTO/update-sapatos";
import { Sapato } from "./sapatos.entity";

@Injectable()
export class SapatoService{

    constructor(
        @InjectRepository(Sapato)
        private readonly sapatoRepositorio: Repository<Sapato>,
    ){}

    findAll(){
        return this.sapatoRepositorio.find();
    }

    findOne(id: string){
        const buscarTrue = this.sapatoRepositorio.findOne(id);

        if(!buscarTrue){
            throw new NotFoundException(`Sapato ID: ${id} not found.`)
        }else{
            return buscarTrue;
        }
    }

    create(createSapatoDTO: CreateSapatos){
        const sapatoCreate = this.sapatoRepositorio.create(createSapatoDTO);
        return this.sapatoRepositorio.save(sapatoCreate);
    }

    async update(id:string, updateDTO: UpdateSapato){
        const sapatoUpdate = await this.sapatoRepositorio.preload({
            id: +id,
            ...updateDTO,
        })
        if(!sapatoUpdate){
            throw new NotFoundException(`Sapato ID: ${id} not found.`);
        }
        return this.sapatoRepositorio.save(sapatoUpdate);
    }

    async remove(id: string){
        const sapatoRemove = await this.sapatoRepositorio.findOne(id);

        if(!sapatoRemove){
            throw new NotFoundException(`Sapato ID: ${id} not found.`);
        }
        return this.sapatoRepositorio.remove(sapatoRemove);
    }
}