import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Optional, Output } from '@angular/core';
import { ProviderItem, Providers } from '@core/models/provider.interface';
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
  
  @Output() providerItem = new EventEmitter<ProviderItem>;

  constructor(
   @Optional() private providersService: ProvidersService
  ) {}

  ngOnInit(): void {
    this.getProviders();
  }

  getProviders() {
    this.providers$ = this.providersService.getProviders();
  }

  onClickProvider(value: ProviderItem): void {
    this.providerItem.emit(value);
  }
}
