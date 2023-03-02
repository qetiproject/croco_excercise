import { ChangeDetectionStrategy, Component, OnInit, Optional, SimpleChanges } from '@angular/core';
import { ProviderItem } from '@core/models/provider.interface';
import { Slots } from '@core/models/slot.interface';
import { SlotsService } from '@core/services/slots.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slot-list',
  templateUrl: './slot-list.component.html',
  styleUrls: ['./slot-list.component.css'],
  providers: [SlotsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlotListComponent implements OnInit{
  
  slots$!: Observable<Slots>;

  constructor(
    @Optional() private slotsService: SlotsService
  ){}

  ngOnInit(): void {}

  getSlotsByProvider(provider: string): void {
    this.slots$ = this.slotsService.getSlotsByProvider(`${provider}`, 'desktop')
  }

  onProvider(value: ProviderItem) {
    this.getSlotsByProvider(value.provider)
  }
}
