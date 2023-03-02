import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Categories } from '@core/models/category.interface';
import { BASE_URL } from '@shared/shared.module';
import { Observable, shareReplay, Subject, take, tap } from 'rxjs';

@Injectable()

export class CategoryService {

  private categories = new Subject<Categories>;

  constructor(
    private httpClient: HttpClient,
    @Inject(BASE_URL) private _baseUrl: string
  ) {}

  getCategories(type: string = 'slot'): Observable<Categories> {
    return this.httpClient.get<Categories>(`${this._baseUrl}/v2/${type}/categories`)
      .pipe(
        tap((_categories) => this.categories.next(_categories)),
        take(1),
        shareReplay()
      )
  }
}
