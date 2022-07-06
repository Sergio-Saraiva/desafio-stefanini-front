import { BaseModel } from './base.model';
import { City } from './city.model';

export interface Person extends BaseModel {
  name: string;
  age: number;
  cpf: string;
  city: City;
}
