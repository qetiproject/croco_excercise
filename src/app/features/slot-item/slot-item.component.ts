import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-slot-item',
  templateUrl: './slot-item.component.html',
  styleUrls: ['./slot-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlotItemComponent {

}
