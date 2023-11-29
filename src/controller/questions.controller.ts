
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    HttpStatus,
  } from '@nestjs/common';
import { QuestionsService } from 'src/service/questions.service';

import {QuestionsDto } from 'src/dto/questions.dto';

@Controller('questions')
export class QuestionsController{
  constructor(private questionsService: QuestionsService){}

  @Get()
  async showAllQuestions(){
    const questions = await this.questionsService.showAll();
    console.log(questions);
    return {
      statusCode: HttpStatus.OK,
      message: "Questions fetched successfully",
      questions
    };
  }

  @Post()
  async createQuestions(@Body() data: QuestionsDto){
    const questions = await this.questionsService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Question created successfully',
      questions
    }
  }

  @Get(":id")
  async readQuestions(@Param('id') id: number){
    const data = await this.questionsService.read(id);
    return{
      statusCode: HttpStatus.OK,
      message: 'Question fetched successfully',
      data
    };
  }
  @Patch(':id')
  async updateQuestions(@Param('id') id: number, @Body() data: Partial<QuestionsDto>){
    await this.questionsService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Question updated successfully',
    };
  }

  @Delete(':id')
  async deleteQuestions(@Param('id') id: number){
    await this.questionsService.destroy(id);
    return{
      statusCode: HttpStatus.OK,
      message: 'Question deleted successfully',
    };
  }
}