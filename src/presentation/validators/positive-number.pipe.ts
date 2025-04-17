import {
  PipeTransform,
  Injectable,
  BadRequestException,
  ArgumentMetadata
} from "@nestjs/common";

@Injectable()
export class PositiveNumberPipe implements PipeTransform {
  transform(value: unknown, metadata: ArgumentMetadata) {
    const number = parseInt(value as string, 10);

    if (isNaN(number)) {
      throw new BadRequestException("Value must be a number");
    }

    if (number <= 0) {
      throw new BadRequestException("Value must be a positive number");
    }

    return number;
  }
}
