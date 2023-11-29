import "reflect-metadata"
import { DataSource } from "typeorm"
import { Answers } from "./entity/answers.entity"
import { Questions } from "./entity/questions.entity"
import { Survey } from "./entity/survey.entity"
import { Choices } from "./entity/choices.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [Survey, Answers, Questions, Choices], 
    migrations: [],
    subscribers: [],
})
