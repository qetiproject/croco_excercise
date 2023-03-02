import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SlotsByCategory, SlotsByProvider } from '@core/models/slot.interface';
import { BASE_URL } from '@shared/shared.module';
import { map, Observable, shareReplay, Subject, take, tap } from 'rxjs';

@Injectable()

export class SlotsService {

  private slotsByProvider = new Subject();
  private slotsByCategory = new Subject();
  
  constructor(
    private httpClient: HttpClient,
    @Inject(BASE_URL) private _baseUrl: string
  ) {}
  

  getSlotsByProvider(provider: string, platform: string = 'desktop'): Observable<SlotsByProvider> {
    return this.httpClient.get<SlotsByProvider>(`${this._baseUrl}/v2/slot/providers/${provider}?platform=${platform}`)
      .pipe(
        tap((_slots) => this.slotsByProvider.next(_slots)),
        take(1),
        shareReplay()
      )
  }

  getSlotCategories(games: string = 'games'): Observable<{data: SlotsByCategory}> {
    return this.httpClient.get<{data: SlotsByCategory}>(`${this._baseUrl}/v2/slot/categories?include=${games}`)
      .pipe(
        tap((_slots) => this.slotsByCategory.next(_slots)),
        take(1),
        shareReplay()
      )
  }


}
