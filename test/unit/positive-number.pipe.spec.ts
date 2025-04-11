import { PositiveNumberPipe } from "../../src/presentation/validators/positive-number.pipe";
import { ArgumentMetadata, BadRequestException } from "@nestjs/common";

describe("PositiveNumberPipe", () => {
  let pipe: PositiveNumberPipe;
  const metadata: ArgumentMetadata = {
    type: "param",
    metatype: Number,
    data: "",
  };

  beforeEach(() => {
    pipe = new PositiveNumberPipe();
  });

  it("should be defined", () => {
    expect(pipe).toBeDefined();
  });

  it("should transform string number to number successfully", () => {
    expect(pipe.transform("42", metadata)).toBe(42);
  });

  it("should throw error when value is not a number", () => {
    expect(() => pipe.transform("not-a-number", metadata)).toThrow(
      BadRequestException
    );
  });

  it("should throw error when number is negative", () => {
    expect(() => pipe.transform("-1", metadata)).toThrow(BadRequestException);
  });

  it("should throw error when number is zero", () => {
    expect(() => pipe.transform("0", metadata)).toThrow(BadRequestException);
  });
});
