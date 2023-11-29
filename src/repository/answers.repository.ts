import { SetMetadata } from "@nestjs/common";
import { Answers } from "../entity/answers.entity";

export const TYPEORM_EX_CUSTOM_REPOSITORY = "TYPEORM_EX_CUSTOM_REPOSITORY";

export function AnswersRepository(entity: Answers): ClassDecorator {
  return SetMetadata(TYPEORM_EX_CUSTOM_REPOSITORY, entity);
}

