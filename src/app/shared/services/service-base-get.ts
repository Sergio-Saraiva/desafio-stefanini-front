import { Observable, switchMap } from 'rxjs';
import { ServiceBase } from './service-base';

export class ServiceBaseGet<S> extends ServiceBase {
  getAll(): Observable<S[]> {
    return this.url$.pipe(
      switchMap((url) => this.httpClient.get<S[]>(`${url}`))
    );
  }

  getById(id: number): Observable<S> {
    return this.url$.pipe(
      switchMap((url) => this.httpClient.get<S>(`${url}/${id}`))
    );
  }

  update(item: S): Observable<any> {
    return this.url$.pipe(
      switchMap((url) => this.httpClient.put(`${url}`, item))
    );
  }

  create(item: S): Observable<any> {
    return this.url$.pipe(
      switchMap((url) => this.httpClient.post(`${url}`, item))
    );
  }

  delete(itemId: string): Observable<any> {
    return this.url$.pipe(
      switchMap((url) => this.httpClient.delete(`${url}/${itemId}`))
    );
  }
}
