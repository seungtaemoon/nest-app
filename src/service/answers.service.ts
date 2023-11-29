import { Injectable } from '@nestjs/common';
import { Answers } from 'src/entity/answers.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswersDto } from 'src/dto/answers.dto';

@Injectable()
export class AnswersService {
    constructor(
        @InjectRepository(Answers)
        private answersRepository: Repository<Answers>
    ){}

    async showAll(){
        return await this.answersRepository.find();
    }

    async create(data: AnswersDto){
        const answers = this.answersRepository.create(data);
        await this.answersRepository.save(data);
        return answers;
    }

    async read(id: number){
        return await this.answersRepository.findOne({
            where: {id:id}
        });
    }

    async update(id: number, data: Partial<AnswersDto>){
        await this.answersRepository.update({id}, data);
        return await this.answersRepository.findOne({
            where: {id:id}
        });
    }

    async destroy(id: number){
        await this.answersRepository.delete({id});
        return {deleted: true};
    }
}