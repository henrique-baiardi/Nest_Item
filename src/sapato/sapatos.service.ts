import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Sapato } from "./sapatos.entity";

@Injectable()
export class SapatoService{

    private sapatos:Sapato[] = [
        {
            id: 1,
        nome: 'nike 123',
        descricao: 'sap esportivo',
        tamanho: '42-43',
        valor: 150.00,
        quantidade: 100,
        },
    ];

    findAll(){
        return this.sapatos;
    }

    findOne(id: string){
        const buscarTrue = this.sapatos.find((sapato:Sapato) => sapato.id === Number(id));

        if(!buscarTrue){
            throw new HttpException(`Sapato ID: ${id} not found.`, HttpStatus.NOT_FOUND)
        }else{
            return buscarTrue;
        }
    }

    create(createCursoDTO: any){
        this.sapatos.push(createCursoDTO);
        return createCursoDTO;
    }

    update(id:string, updateDTO: any){
        const indexSapato = this.sapatos.findIndex(
            (sapato:Sapato) => sapato.id === Number(id)
        );

        this.sapatos[indexSapato] = updateDTO;
    }

    remove(id: string){
        const indexSapato = this.sapatos.findIndex(
            (sapato:Sapato) => sapato.id === Number(id)
        );

        if(indexSapato >= 0){
            this.sapatos.splice(indexSapato, 1);
            return `Sapato de id:${id} deletado com sucesso!`
        }else{
            throw new HttpException(`Sapato ID: ${id} not found.`, HttpStatus.NOT_FOUND)
        }
    }
}