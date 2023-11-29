import { SetMetadata } from "@nestjs/common";
import { Questions } from "../entity/questions.entity";

export const TYPEORM_EX_CUSTOM_REPOSITORY = "TYPEORM_EX_CUSTOM_REPOSITORY";

export function QuestionsRepository(entity: Questions): ClassDecorator {
  return SetMetadata(TYPEORM_EX_CUSTOM_REPOSITORY, entity);
}

