import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomGenerationComponent } from './room-generation.component';

const routes: Routes = [{ path: '', component: RoomGenerationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomGenerationRoutingModule { }
