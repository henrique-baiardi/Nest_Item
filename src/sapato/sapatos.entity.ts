import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tamanhos } from "./tamanhos.entity";

@Entity('Sapatos')
export class Sapato{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    valor: number;

    @Column()
    disponivel: boolean;

    @JoinTable()
    @ManyToMany(()=>Tamanhos, (tamanhos:Tamanhos)=> tamanhos.sapatos, {
        cascade: true
    }) 
    tamanhos: Tamanhos[];
}