import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { ConfigurationService } from './configuration.service';
import { ServiceBaseGet } from './service-base-get';

@Injectable({
  providedIn: 'root',
})
export class PersonService extends ServiceBaseGet<Person> {
  constructor(configService: ConfigurationService, httpClient: HttpClient) {
    super('person', configService, httpClient);
  }
}
