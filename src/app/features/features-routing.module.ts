import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlotListComponent } from './slot-list/slot-list.component';

const routes: Routes = [
  {
    path: 'slots',
    component: SlotListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
