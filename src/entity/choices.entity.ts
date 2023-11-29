import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { ManyToOne } from "typeorm"
import { Questions } from "./questions.entity";


@Entity()
export class Choices {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    choice: string

    @Column()
    choiceScore: number

    @ManyToOne(() => Questions, (questions) => questions)
    questions: Questions
    
}
