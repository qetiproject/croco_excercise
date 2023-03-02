import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '@shared/shared.module';
import { Observable, Subject, tap } from 'rxjs';
import { Providers } from '@core/models/provider.interface';

@Injectable()

export class ProvidersService {
  
  private providers = new Subject<Providers>;

    constructor(
      private httpClient: HttpClient,
      @Inject(BASE_URL) private _baseUrl: string
    ) {}

    getProviders(type: string, platform: string): Observable<Providers> {
      return this.httpClient.get<Providers>(`${this._baseUrl}?type=${type}&platform=${platform}`)
        .pipe(
          tap((response: any) => {
            if(response.data) {
              this.providers.next(response.data)
            }
          })
        )
    }
}
