import { Injectable } from '@nestjs/common';
import { Questions } from 'src/entity/questions.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionsDto } from 'src/dto/questions.dto';

@Injectable()
export class QuestionsService {
    constructor(
        @InjectRepository(Questions)
        private questionsRepository: Repository<Questions>
    ){}

    async showAll(){
        return await this.questionsRepository.find();
    }

    async create(data: QuestionsDto){
        const survey = this.questionsRepository.create(data);
        await this.questionsRepository.save(data);
        return survey;
    }

    async read(id: number){
        return await this.questionsRepository.findOne({
            where: {id:id}
        });
    }

    async update(id: number, data: Partial<QuestionsDto>){
        await this.questionsRepository.update({id}, data);
        return await this.questionsRepository.findOne({
            where: {id:id}
        });
    }

    async destroy(id: number){
        await this.questionsRepository.delete({id});
        return {deleted: true};
    }
}