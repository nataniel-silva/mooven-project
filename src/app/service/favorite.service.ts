import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Injectable, Injector} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable()
@Injectable()
export class FavoriteService {
  public http: HttpClient;

  constructor(public injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  searchFavoriteRepository(): Observable<any> {
    let href = environment.urlApi + '/favorite-repository/';

    return this.http.get<any>(href, {}).pipe(
      catchError((error) => throwError(error.error.error))
    );
  }

  saveFavoriteRepository(httpParam: any, remove: boolean = false): Observable<any> {
    let href = environment.urlApi + '/favorite-repository/';
    let param = {
      owner: httpParam.owner.login,
      name: httpParam.name,
      htmlUrl: httpParam.html_url,
      active: remove ? false : true
    };

    return this.http.post<any>(href, param).pipe(
      catchError((error) => throwError(error.error.error))
    );
  }

}
