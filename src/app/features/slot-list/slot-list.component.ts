import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-slot-list',
  templateUrl: './slot-list.component.html',
  styleUrls: ['./slot-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlotListComponent {

}
