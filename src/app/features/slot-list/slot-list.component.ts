import { ChangeDetectionStrategy, Component, OnInit, Optional, SimpleChanges } from '@angular/core';
import { CategoryItem } from '@core/models/category.interface';
import { ProviderItem } from '@core/models/provider.interface';
import { SlotsByCategory, SlotsByProvider } from '@core/models/slot.interface';
import { SlotsService } from '@core/services/slots.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-slot-list',
  templateUrl: './slot-list.component.html',
  styleUrls: ['./slot-list.component.css'],
  providers: [SlotsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlotListComponent{
  
  slotsByProvider$!: Observable<SlotsByProvider>;
  slotsByCategory$!: Observable<SlotsByCategory>;

  constructor(
    @Optional() private slotsService: SlotsService
  ){}

  getSlotsByProvider(provider: string): void {
    this.slotsByProvider$ = this.slotsService.getSlotsByProvider(`${provider}`)
  }

  getSlotsByCategory(category: string) : void {
    this.slotsByCategory$ = this.slotsService.getSlotCategories(category)
  }

  onProvider(value: ProviderItem) {
    this.getSlotsByProvider(value.provider)
  }

  onCategory(value: CategoryItem) {
    console.log(value, 'category')
    this.getSlotsByCategory(value.category)

  }
}
