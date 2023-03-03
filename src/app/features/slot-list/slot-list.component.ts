import { ChangeDetectionStrategy, Component, OnInit, Optional, SimpleChanges } from '@angular/core';
import { CategoryItem } from '@core/models/category.interface';
import { ProviderItem } from '@core/models/provider.interface';
import { SlotsByProvider } from '@core/models/slot.interface';
import { SlotsService } from '@core/services/slots.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-slot-list',
  templateUrl: './slot-list.component.html',
  styleUrls: ['./slot-list.component.css'],
  providers: [SlotsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlotListComponent{
  
  slotsByProvider$!: Observable<SlotsByProvider>;
  slotsByCategory$!: Observable<Array<CategoryItem>>;

  constructor(
    @Optional() private slotsService: SlotsService
  ){}

  getSlotsByProvider(provider: string): void {
    this.slotsByProvider$ = this.slotsService.getSlotsByProvider(`${provider}`)
  }

  getSlotsByCategory(category: string) : void {
    this.slotsByCategory$ = this.slotsService.getSlotCategories().pipe(
      map(slots => {
        const filteredSlotsByCategory = slots.data.filter(x => x.category === category ?? x)
        return filteredSlotsByCategory;
      })
    )
  }

  onProvider(value: ProviderItem) {
    this.getSlotsByProvider(value.provider)
  }

  onCategory(value: CategoryItem) {
    this.getSlotsByCategory(value.category)

  }
}
