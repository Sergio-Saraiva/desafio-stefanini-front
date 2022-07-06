import { BaseModel } from './base.model';

export interface City extends BaseModel {
  name: string;
  uf: string;
}
