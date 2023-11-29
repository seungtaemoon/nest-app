import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SurveyDto } from 'src/dto/survey.dto';
import { Survey } from 'src/entity/survey.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SurveyService {
    constructor(
        @InjectRepository(Survey)
        private surveyRepository: Repository<Survey>
    ){}

    async showAll(){
        return await this.surveyRepository.find();
    }

    async create(data: SurveyDto){
        const survey = this.surveyRepository.create(data);
        await this.surveyRepository.save(data);
        return survey;
    }

    async read(id: number){
        return await this.surveyRepository.findOne({
            where: {id:id}
        });
    }

    async update(id: number, data: Partial<SurveyDto>){
        await this.surveyRepository.update({id}, data);
        return await this.surveyRepository.findOne({
            where: {id:id}
        });
    }

    async destroy(id: number){
        await this.surveyRepository.delete({id});
        return {deleted: true};
    }
}