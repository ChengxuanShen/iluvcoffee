import { IsString } from 'class-validator';
import { Flavor } from '../entities/flavor.entity';

export class CreateCoffeeDto {
  @IsString()
  name: string;

  @IsString()
  brand: string;

  @IsString({ each: true })
  flavors: string[];
}
