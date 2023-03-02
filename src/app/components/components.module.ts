import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ProviderListComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProviderListComponent,
    CategoryListComponent
  ],
})
export class ComponentsModule { }
