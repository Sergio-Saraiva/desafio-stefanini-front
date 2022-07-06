import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';

export class ServiceBase {
  url$: Observable<string>;
  ibgeibgeApiUrl$: Observable<string>;

  constructor(
    urlEnd: string,
    protected configService: ConfigurationService,
    protected httpClient: HttpClient
  ) {
    this.url$ = configService
      .load()
      .pipe(map((config) => `${config.url}/${urlEnd}`));
    this.ibgeibgeApiUrl$ = configService
      .load()
      .pipe(map((config) => `${config.ibgeApi}/${urlEnd}`));
  }
}
