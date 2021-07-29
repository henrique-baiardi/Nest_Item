import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column('json',{nullable: true})
    tamanhos: string[];
}