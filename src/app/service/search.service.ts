import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Injectable, Injector} from '@angular/core';
import {catchError, map} from "rxjs/operators";
import {environment} from '../../environments/environment';

@Injectable()
@Injectable()
export class SearchService {
  baseApiUrl: string = 'https://api.github.com';
  public http: HttpClient;

  constructor(public injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  searchRepository(httpParams: any): Observable<any> {
    let href = this.baseApiUrl + '/search/repositories';
    let param = {
      q: httpParams + 'in:name'
    };

    return this.http.get<any>(href, {params: param}).pipe(
      catchError( (error) => throwError(error.error.error))
    );
  }

  searchOwnerRepository(username): Observable<any> {
    let href = this.baseApiUrl + '/users/' + username + '/repos';

    return this.http.get<any>(href, {}).pipe(
      catchError( (error) => throwError(error.error.error))
    );
  }

  searchFavoriteRepository(): Observable<any> {
    let href = environment.urlApi + '/favorite-repository/';
    let headers = {
      'Access-Control-Allow-Origin': '*'
    }

    return this.http.get<any>(href, {}).pipe(
      catchError( (error) => throwError(error.error.error))
    );
  }

}
