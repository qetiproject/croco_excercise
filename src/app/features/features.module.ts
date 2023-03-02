import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlotListComponent } from './slot-list/slot-list.component';
import { SlotItemComponent } from './slot-item/slot-item.component';
import { ComponentsModule } from "../components/components.module";

@NgModule({
    declarations: [
        SlotListComponent,
        SlotItemComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule
    ]
})
export class FeaturesModule { }
