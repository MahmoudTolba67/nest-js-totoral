import { IsString, IsNumber, IsNotEmpty, Min, MinLength, MaxLength } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(120)
    title: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    price: number;
}