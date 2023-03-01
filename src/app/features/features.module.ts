import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlotListComponent } from './slot-list/slot-list.component';
import { SlotItemComponent } from './slot-item/slot-item.component';

@NgModule({
  declarations: [
    SlotListComponent,
    SlotItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
