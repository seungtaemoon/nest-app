import { SetMetadata } from "@nestjs/common";
import { Choices } from "../entity/choices.entity";

export const TYPEORM_EX_CUSTOM_REPOSITORY = "TYPEORM_EX_CUSTOM_REPOSITORY";

export function ChoicesRepository(entity: Choices): ClassDecorator {
  return SetMetadata(TYPEORM_EX_CUSTOM_REPOSITORY, entity);
}

