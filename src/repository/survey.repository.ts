import { SetMetadata } from "@nestjs/common";
import { Survey } from "../entity/survey.entity";

export const TYPEORM_EX_CUSTOM_REPOSITORY = "TYPEORM_EX_CUSTOM_REPOSITORY";

export function SurveyRepository(entity: Survey): ClassDecorator {
  return SetMetadata(TYPEORM_EX_CUSTOM_REPOSITORY, entity);
}

