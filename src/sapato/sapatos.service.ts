import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSapatos } from "./DTO/create-sapato";
import { UpdateSapato } from "./DTO/update-sapatos";
import { Sapato } from "./sapatos.entity";
import { Tamanhos } from "./tamanhos.entity";

@Injectable()
export class SapatoService{

    constructor(
        @InjectRepository(Sapato)
        private readonly sapatoRepositorio: Repository<Sapato>,

        @InjectRepository(Tamanhos)
        private readonly tamanhosRepositorio: Repository<Tamanhos>,
    ){}

    findAll(){
        return this.sapatoRepositorio.find({
            relations: ['tamanhos']
        });
    }

    findOne(id: string){
        const buscarTrue = this.sapatoRepositorio.findOne(id, {
            relations: ['tamanhos'],
        });

        if(!buscarTrue){
            throw new NotFoundException(`Sapato ID: ${id} not found.`)
        }else{
            return buscarTrue;
        }
    }

    async create(createSapatoDTO: CreateSapatos){
        const tamanhos = await Promise.all(
            createSapatoDTO.tamanhos.map((nome) => this.preloadTamanhosPeloNome(nome))
        );

        const sapatoCreate = this.sapatoRepositorio.create({
            ...createSapatoDTO, tamanhos,
        });

        return this.sapatoRepositorio.save(sapatoCreate); 
    }

    async update(id:string, updateDTO: UpdateSapato){
        const tamanhos = updateDTO.tamanhos && (
             await Promise.all(
                updateDTO.tamanhos.map(
                    (nome)=> this.preloadTamanhosPeloNome(nome)
                ),
            )
        );

        const sapatoUpdate = await this.sapatoRepositorio.preload({
            id: +id,
            ...updateDTO,
            tamanhos,
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

    private async preloadTamanhosPeloNome(nome:string): Promise<Tamanhos>{
        const tamanhos = await this.tamanhosRepositorio.findOne( {nome} );

        if(tamanhos){
            return tamanhos;
        }

        return this.tamanhosRepositorio.create({ nome });
    }
}