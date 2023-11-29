import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChoicesDto } from 'src/dto/choices.dto';
import { Choices } from 'src/entity/choices.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ChoicesService {
    constructor(
        @InjectRepository(Choices)
        private choicesRepository: Repository<Choices>
    ){}

    async showAll(){
        return await this.choicesRepository.find();
    }

    async create(data: ChoicesDto){
        const choices = this.choicesRepository.create(data);
        await this.choicesRepository.save(data);
        return choices;
    }

    async read(id: number){
        return await this.choicesRepository.findOne({
            where: {id:id}
        });
    }

    async update(id: number, data: Partial<ChoicesDto>){
        await this.choicesRepository.update({id}, data);
        return await this.choicesRepository.findOne({
            where: {id:id}
        });
    }

    async destroy(id: number){
        await this.choicesRepository.delete({id});
        return {deleted: true};
    }

}