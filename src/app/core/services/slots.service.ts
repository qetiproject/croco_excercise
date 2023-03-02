import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Slots } from '@core/models/slot.interface';
import { BASE_URL } from '@shared/shared.module';
import { Observable, shareReplay, Subject, take, tap } from 'rxjs';

@Injectable()

export class SlotsService {

  private slots = new Subject();
  
  constructor(
    private httpClient: HttpClient,
    @Inject(BASE_URL) private _baseUrl: string
  ) {}
  

  getSlotsByProvider(provider: string, platform: string): Observable<Slots> {
    return this.httpClient.get<Slots>(`${this._baseUrl}/v2/slot/providers/${provider}?platform=${platform}`)
      .pipe(
        tap((_slots) => this.slots.next(_slots)),
        take(1),
        shareReplay()
      )
  }

}
