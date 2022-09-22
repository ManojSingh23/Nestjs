import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { role } from "./role.enum";

@Entity()
export class userData{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    username:string;

    @Column()
    email:string;

    @Column()
    password:string

    @Column()
    roles:role
    
}