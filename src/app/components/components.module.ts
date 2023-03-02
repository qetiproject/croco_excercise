import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [
    ProviderListComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProviderListComponent,
    CategoryListComponent
  ]
})
export class ComponentsModule { }
