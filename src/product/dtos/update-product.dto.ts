import { IsString, IsNumber, IsOptional, Min, MinLength, MaxLength } from 'class-validator';

export class UpdateProductDto {
    @IsOptional()
    @IsString()
    @MinLength(2)
    @MaxLength(120)
    title?: string;

    @IsOptional()
    @IsNumber()
    @Min(1)
    price?: number;
}