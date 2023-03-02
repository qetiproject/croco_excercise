import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SlotsByProvider } from '@core/models/slot.interface';
import { BASE_URL } from '@shared/shared.module';
import { Observable, shareReplay, Subject, take, tap } from 'rxjs';

@Injectable()

export class SlotsService {

  private slotsByProvider = new Subject();
  
  constructor(
    private httpClient: HttpClient,
    @Inject(BASE_URL) private _baseUrl: string
  ) {}
  

  getSlotsByProvider(provider: string, platform: string): Observable<SlotsByProvider> {
    return this.httpClient.get<SlotsByProvider>(`${this._baseUrl}/v2/slot/providers/${provider}?platform=${platform}`)
      .pipe(
        tap((_slots) => this.slotsByProvider.next(_slots)),
        take(1),
        shareReplay()
      )
  }

}
