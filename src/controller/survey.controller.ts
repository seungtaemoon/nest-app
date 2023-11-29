
import {
    Body,
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    HttpStatus
  } from '@nestjs/common';
import { SurveyDto } from 'src/dto/survey.dto';

import { SurveyService } from 'src/service/survey.service';

@Controller('survey')
export class SurveyController{
  constructor(private surveyService: SurveyService){}

  @Get()
  async showAllSurveys(){
    const survey = await this.surveyService.showAll();
    console.log(survey);
    return {
      statusCode: HttpStatus.OK,
      message: "Surveys fetched successfully",
      survey
    };
  }

  @Post()
  async createSurvey(@Body() data: SurveyDto){
    const survey = await this.surveyService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Survey created successfully',
      survey
    }
  }

  @Get(":id")
  async readSurvey(@Param('id') id: number){
    const data = await this.surveyService.read(id);
    return{
      statusCode: HttpStatus.OK,
      message: 'Survey fetched successfully',
      data
    };
  }
  @Patch(':id')
  async updateSurvey(@Param('id') id: number, @Body() data: Partial<SurveyDto>){
    await this.surveyService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Survey updated successfully',
    };
  }

  @Delete(':id')
  async deleteSurvey(@Param('id') id: number){
    await this.surveyService.destroy(id);
    return{
      statusCode: HttpStatus.OK,
      message: 'Survey deleted successfully',
    };
  }
}