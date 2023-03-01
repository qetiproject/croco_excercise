import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProviderListComponent {

}
