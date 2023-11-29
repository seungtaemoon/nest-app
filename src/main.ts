import { AppDataSource } from "./data-source"
import { Survey } from "./entity/survey.entity"
import "reflect-metadata";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Answers } from "./entity/answers.entity";
import { Questions } from "./entity/questions.entity";
import { Choices } from "./entity/choices.entity";
import { HttpExceptionFilter } from './common/http-exception.filter';

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new data into the database...")
    const survey = new Survey()
    survey.completed = false

    const questions = new Questions()
    questions.question = "어디로 여행가고 싶나요?"
    questions.questionOrder = 1

    const answers = new Answers()
    answers.answer = "유럽/아프리카"
    answers.answerScore = 2

    const choices = new Choices()
    choices.choice = "유럽/아프리카"
    choices.choiceScore = 2

    await AppDataSource.manager.save(survey)
    await AppDataSource.manager.save(questions)
    await AppDataSource.manager.save(answers)
    await AppDataSource.manager.save(choices)

    console.log("Please check the database if some data are entered.")

}).catch(error => console.log(error))

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(4000);
  }
  bootstrap();
