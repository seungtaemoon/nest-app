import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Survey } from "./survey.entity";
import { Answers } from "./answers.entity";
import { Choices } from "./choices.entity";

@Entity()
export class Questions {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    question: string

    @Column()
    questionOrder: number

    @ManyToOne(() => Survey, (survey) => survey)
    survey: Survey

    @OneToMany(() => Answers, (answers) => answers)
    answers: Answers[]
    
    @OneToMany(() => Choices, (choices) => choices)
    choices: Choices[]
}
