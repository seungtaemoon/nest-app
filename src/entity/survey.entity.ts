import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Questions } from "./questions.entity";


@Entity()
export class Survey {


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    completed: boolean

    @OneToMany(() => Questions, (questions) => questions)
    questions: Questions[]
    
}
