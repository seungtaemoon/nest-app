
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
import { ChoicesDto } from 'src/dto/choices.dto';
import { ChoicesService } from 'src/service/choices.service';

@Controller('choices')
export class ChoicesController{
  constructor(private choicesService: ChoicesService){}

  @Get()
  async showAllChoices(){
    const choices = await this.choicesService.showAll();
    console.log(choices);
    return {
      statusCode: HttpStatus.OK,
      message: "Choices fetched successfully",
      choices
    };
  }

  @Post()
  async createChoices(@Body() data: ChoicesDto){
    const questions = await this.choicesService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Choice created successfully',
      questions
    }
  }

  @Get(":id")
  async readChoices(@Param('id') id: number){
    const data = await this.choicesService.read(id);
    return{
      statusCode: HttpStatus.OK,
      message: 'Choice fetched successfully',
      data
    };
  }
  @Patch(':id')
  async updateChoices(@Param('id') id: number, @Body() data: Partial<ChoicesDto>){
    await this.choicesService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Choice updated successfully',
    };
  }

  @Delete(':id')
  async deleteChoices(@Param('id') id: number){
    await this.choicesService.destroy(id);
    return{
      statusCode: HttpStatus.OK,
      message: 'Choice deleted successfully',
    };
  }
}