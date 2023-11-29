
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    HttpStatus
  } from '@nestjs/common';
import { AnswersDto } from 'src/dto/answers.dto';
import { AnswersService } from 'src/service/answers.service';

@Controller('answers')
export class AnswersController{
  constructor(private answersService: AnswersService){}

  @Get()
  async showAllAnswers(){
    const answers = await this.answersService.showAll();
    console.log(answers);
    return {
      statusCode: HttpStatus.OK,
      message: "Answers fetched successfully",
      answers
    };
  }

  @Post()
  async createAnswers(@Body() data: AnswersDto){
    const answers = await this.answersService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Answer created successfully',
      answers
    }
  }

  @Get(":id")
  async readAnswers(@Param('id') id: number){
    const data = await this.answersService.read(id);
    return{
      statusCode: HttpStatus.OK,
      message: 'Answer fetched successfully',
      data
    };
  }
  @Patch(':id')
  async updateAnswers(@Param('id') id: number, @Body() data: Partial<AnswersDto>){
    await this.answersService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Answer updated successfully',
    };
  }

  @Delete(':id')
  async deleteAnswers(@Param('id') id: number){
    await this.answersService.destroy(id);
    return{
      statusCode: HttpStatus.OK,
      message: 'Answer deleted successfully',
    };
  }
}