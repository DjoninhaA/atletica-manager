import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from "@nestjs/common";

@Injectable()
export class PositiveNumberPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const number = parseInt(value);

    if (isNaN(number)) {
      throw new BadRequestException("Value must be a number");
    }

    if (number <= 0) {
      throw new BadRequestException("Value must be a positive number");
    }

    return number;
  }
}
