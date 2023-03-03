import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SlotGame } from '@core/models/slot.interface';

@Component({
  selector: 'app-slot-item',
  templateUrl: './slot-item.component.html',
  styleUrls: ['./slot-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlotItemComponent{
 
  @Input() games!: Array<SlotGame>;

}
