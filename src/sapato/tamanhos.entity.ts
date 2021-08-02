import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sapato } from "./sapatos.entity";

@Entity('tamanhos')
export class Tamanhos{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @ManyToMany(()=> Sapato, (sapatos:Sapato)=> sapatos.tamanhos)
    sapatos:Sapato[];

}