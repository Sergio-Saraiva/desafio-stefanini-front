import { Observable, switchMap } from 'rxjs';
import { ServiceBase } from './service-base';

export class ServiceBaseGet<S> extends ServiceBase {
  getAll(): Observable<S> {
    return this.url$.pipe(switchMap((url) => this.httpClient.get<S>(`${url}`)));
  }

  getById(id: number): Observable<S> {
    return this.url$.pipe(
      switchMap((url) => this.httpClient.get<S>(`${url}/${id}`))
    );
  }
}
