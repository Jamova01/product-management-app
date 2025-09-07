import {
  IsString,
  IsOptional,
  IsNumber,
  IsPositive,
  IsUrl,
  MinLength,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Paracetamol 500mg',
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  name: string;

  @ApiProperty({
    description: 'Descripción del producto',
    example: 'Analgesico y antipirético',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Precio del producto',
    example: 1200.5,
    type: Number,
  })
  @Type(() => Number)
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Price must be a valid number with up to 2 decimals' },
  )
  @IsPositive({ message: 'Price must be greater than zero' })
  @IsNotEmpty()
  price: number;

  @ApiPropertyOptional({
    description: 'URL de la imagen del producto',
    example: 'https://example.com/image.png',
  })
  @IsOptional()
  @IsUrl({}, { message: 'Image URL must be a valid URL' })
  imageUrl?: string;
}
