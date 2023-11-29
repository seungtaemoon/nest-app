import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { ManyToOne } from "typeorm"
import { Questions } from "./questions.entity";


@Entity()
export class Answers {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    answer: string

    @Column()
    answerScore: number

    @ManyToOne(() => Questions, (questions) => questions)
    questions: Questions
    
}
