import { ChangeDetectionStrategy, Component, OnInit, Optional } from '@angular/core';
import { Providers } from '@core/models/provider.interface';
import { ProvidersService } from '@core/services/providers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css'],
  providers: [ProvidersService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProviderListComponent implements OnInit{

  providers$!: Observable<Providers>;
  
  constructor(
   @Optional() private providersService: ProvidersService
  ) {}

  ngOnInit(): void {
    this.getProviders();
  }

  getProviders() {
    this.providers$ = this.providersService.getProviders('slot', 'desktop');
  }

}
