import { AppDataSource } from "./data-source"
import { Survey } from "./entity/survey.entity"
import "reflect-metadata";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Answers } from "./entity/answers.entity";
import { Questions } from "./entity/questions.entity";
import { Choices } from "./entity/choices.entity";
import { HttpExceptionFilter } from './common/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';


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
    //Global Middleware 설정 -> Cors 속성 활성화
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        optionsSuccessStatus: 200,
    });

    app.useGlobalPipes(
        new ValidationPipe({
          /**
           * whitelist: DTO에 없은 속성은 무조건 거른다.
           * forbidNonWhitelisted: 전달하는 요청 값 중에 정의 되지 않은 값이 있으면 Error를 발생합니다.
           * transform: 네트워크를 통해 들어오는 데이터는 일반 JavaScript 객체입니다.
           *            객체를 자동으로 DTO로 변환을 원하면 transform 값을 true로 설정한다.
           * disableErrorMessages: Error가 발생 했을 때 Error Message를 표시 여부 설정(true: 표시하지 않음, false: 표시함)
           *                       배포 환경에서는 true로 설정하는 걸 추천합니다.
           */
          whitelist: true,
          forbidNonWhitelisted: true,
          transform: true,
          disableErrorMessages: true,
        }),
      );
    await app.listen(4000);
  }
  bootstrap();
